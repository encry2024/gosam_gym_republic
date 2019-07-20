<?php

namespace App\Http\Controllers\Backend\Customer;

use App\Models\Customer\Customer;
use App\Http\Controllers\Controller;
use App\Events\Backend\Customer\CustomerDeleted;
use App\Repositories\Backend\CustomerRepository;
use App\Http\Requests\Backend\Customer\StoreCustomerRequest;
use App\Http\Requests\Backend\Customer\ManageCustomerRequest;
use App\Http\Requests\Backend\Customer\UpdateCustomerRequest;
use Auth;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\View;

/**
 * Class CustomerController.
 */
class CustomerController extends Controller
{
    /**
     * @var CustomerRepository
     */
    protected $customerRepository;

    /**
     * CustomerController constructor.
     *
     * @param CustomerRepository $customerRepository
     */
    public function __construct(CustomerRepository $customerRepository)
    {
        $this->customerRepository = $customerRepository;
    }

    /**
     * @param ManageCustomerRequest $request
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(ManageCustomerRequest $request)
    {
        return view('backend.customer.index')
            ->withCustomers($this->customerRepository->getActivePaginated(25, 'id', 'asc'));
    }

    /**
     * @param ManageCustomerRequest    $request
     * @param RoleRepository       $roleRepository
     * @param PermissionRepository $permissionRepository
     *
     * @return mixed
     */
    public function create(ManageCustomerRequest $request)
    {
        return view('backend.customer.create');
    }

    /**
     * @param StoreCustomerRequest $request
     *
     * @throws \Throwable
     * @return mixed
     */
    public function store(StoreCustomerRequest $request)
    {
        $customer = $this->customerRepository->create($request->only(
            'first_name',
            'last_name',
            'email',
            'date_of_birth',
            'age',
            'address',
            'contact_number',
            'emergency_number'
        ));

        return redirect()->route('admin.customer.index')->withFlashSuccess(__('alerts.backend.customers.created', ['customer' => $customer->name]));
    }

    /**
     * @param ManageCustomerRequest $request
     * @param Customer              $customer
     *
     * @return mixed
     */
    public function show(ManageCustomerRequest $request, Customer $customer)
    {
        if ($request->ajax()) {
            return Response::json($customer->load(['memberships.activity', 'memberships.coach']));
        }

        return view('backend.customer.show')
            ->withCustomer($customer);
    }

    /**
     * @param ManageCustomerRequest    $request
     * @param PermissionRepository $permissionRepository
     * @param Customer                 $customer
     *
     * @return mixed
     */
    public function edit(UpdateCustomerRequest $request, Customer $customer)
    {
        return view('backend.customer.edit')->withCustomer($customer);
    }

    /**
     * @param UpdateCustomerRequest $request
     * @param Customer              $customer
     *
     * @throws \App\Exceptions\GeneralException
     * @throws \Throwable
     * @return mixed
     */
    public function update(UpdateCustomerRequest $request, Customer $customer)
    {
        $customer = $this->customerRepository->update($customer, $request->only(
            'first_name',
            'last_name',
            'email',
            'date_of_birth',
            'age',
            'address',
            'contact_number',
            'emergency_number'
        ));

        return redirect()->route('admin.customer.index')->withFlashSuccess(__('alerts.backend.customers.updated', ['customer' => $customer->name]));
    }

    /**
     * @param ManageCustomerRequest $request
     * @param Customer              $customer
     *
     * @throws \Exception
     * @return mixed
     */
    public function destroy(ManageCustomerRequest $request, Customer $customer)
    {
        $customerName = $customer->name;

        $this->customerRepository->deleteById($customer->id);

        event(new CustomerDeleted(Auth::user()->full_name, $customerName));

        return redirect()->route('admin.customer.deleted')->withFlashSuccess(__('alerts.backend.customers.deleted', ['customer' => $customerName]));
    }
}
