<?php

namespace App\Repositories\Backend;

use App\Models\Customer\Customer;
use Illuminate\Support\Facades\DB;
use App\Exceptions\GeneralException;
use App\Repositories\BaseRepository;
use App\Events\Backend\Customer\CustomerCreated;
use App\Events\Backend\Customer\CustomerUpdated;
use App\Events\Backend\Customer\CustomerRestored;
use Illuminate\Pagination\LengthAwarePaginator;
use App\Events\Backend\Customer\CustomerPermanentlyDeleted;
use Illuminate\Support\Carbon;
use Auth;

/**
 * Class CustomerRepository.
 */
class CustomerRepository extends BaseRepository
{
    /**
     * @return string
     */
    public function model()
    {
        return Customer::class;
    }

    /**
     * @param int    $paged
     * @param string $orderBy
     * @param string $sort
     *
     * @return mixed
     */
    public function getActivePaginated($paged = 25, $orderBy = 'created_at', $sort = 'desc') : LengthAwarePaginator
    {
        return $this->model
            ->orderBy($orderBy, $sort)
            ->paginate($paged);
    }

    /**
     * @param int    $paged
     * @param string $orderBy
     * @param string $sort
     *
     * @return LengthAwarePaginator
     */
    public function getDeletedPaginated($paged = 25, $orderBy = 'created_at', $sort = 'desc') : LengthAwarePaginator
    {
        return $this->model
            ->onlyTrashed()
            ->orderBy($orderBy, $sort)
            ->paginate($paged);
    }

    /**
     * @param array $data
     *
     * @throws \Exception
     * @throws \Throwable
     * @return Customer
     */
    public function create(array $data) : Customer
    {
        return DB::transaction(function () use ($data) {
            $dateOfBirth = date('Y-m-d', strtotime($data['date_of_birth']));
            $age = Carbon::parse($dateOfBirth)->age;

            $customer = parent::create([
                'first_name' => $data['first_name'],
                'last_name' => $data['last_name'],
                'email' => $data['email'],
                'date_of_birth' => $dateOfBirth,
                'age' => $age,
                'address' => $data['address'],
                'contact_number' => $data['contact_number'],
                'emergency_number' => $data['emergency_number']
            ]);

            if ($customer) {
                event(new CustomerCreated(Auth::user()->full_name, $customer->name));

                return $customer;
            }

            throw new GeneralException(__('exceptions.backend.customers.create_error'));
        });
    }

    /**
     * @param Customer  $customer
     * @param array $data
     *
     * @throws GeneralException
     * @throws \Exception
     * @throws \Throwable
     * @return Customer
     */
    public function update(Customer $customer, array $data) : Customer
    {
        return DB::transaction(function () use ($customer, $data) {
            $dateOfBirth = date('Y-m-d', strtotime($data['date_of_birth']));
            $age = Carbon::parse($dateOfBirth)->age;

            if ($customer->update([
                'first_name' => $data['first_name'],
                'last_name' => $data['last_name'],
                'email' => $data['email'],
                'date_of_birth' => $dateOfBirth,
                'age' => $age,
                'address' => $data['address'],
                'contact_number' => $data['contact_number'],
                'emergency_number' => $data['emergency_number']
            ])) {
                event(new CustomerUpdated(Auth::user()->full_name, $customer->name));

                return $customer;
            }

            throw new GeneralException(__('exceptions.backend.customers.update_error'));
        });
    }

    /**
     * @param Customer $customer
     *
     * @throws GeneralException
     * @throws \Exception
     * @throws \Throwable
     * @return Customer
     */
    public function forceDelete(Customer $customer) : Customer
    {
        if ($customer->deleted_at === null) {
            throw new GeneralException(__('exceptions.backend.customers.delete_first'));
        }

        return DB::transaction(function () use ($customer) {
            if ($customer->forceDelete()) {
                event(new CustomerPermanentlyDeleted(Auth::user()->full_name, $customer->name));

                return $customer;
            }

            throw new GeneralException(__('exceptions.backend.customers.delete_error'));
        });
    }

    /**
     * @param Customer $customer
     *
     * @throws GeneralException
     * @return Customer
     */
    public function restore(Customer $customer) : Customer
    {
        if ($customer->deleted_at === null) {
            throw new GeneralException(__('exceptions.backend.customers.cant_restore'));
        }

        if ($customer->restore()) {
            event(new CustomerRestored(Auth::user()->full_name, $customer->name));

            return $customer;
        }

        throw new GeneralException(__('exceptions.backend.customers.restore_error'));
    }
}
