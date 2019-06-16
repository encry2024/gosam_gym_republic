<?php

namespace App\Http\Controllers\Backend\Customer;

use App\Models\Customer\Customer;
use App\Http\Controllers\Controller;
use App\Repositories\Backend\CustomerRepository;
use App\Http\Requests\Backend\Customer\ManageCustomerRequest;
use Auth;

/**
 * Class CustomerStatusController.
 */
class CustomerStatusController extends Controller
{
    /**
     * @var CustomerRepository
     */
    protected $customerRepository;

    /**
     * @param CustomerRepository $customerRepository
     */
    public function __construct(CustomerRepository $customerRepository)
    {
        $this->customerRepository = $customerRepository;
    }

    /**
     * @param ManageCustomerRequest $request
     *
     * @return mixed
     */
    public function getDeleted(ManageCustomerRequest $request)
    {
        return view('backend.customer.deleted')
            ->withCustomers($this->customerRepository->getDeletedPaginated(25, 'id', 'asc'));
    }

    /**
     * @param ManageCustomerRequest $request
     * @param Customer              $deletedCustomer
     *
     * @throws \App\Exceptions\GeneralException
     * @throws \Throwable
     * @return mixed
     */
    public function delete(ManageCustomerRequest $request, Customer $deletedCustomer)
    {
        $customerName = $deletedCustomer->name;

        $this->customerRepository->forceDelete($deletedCustomer);

        return redirect()->route('admin.customer.deleted')->withFlashSuccess(__('alerts.backend.customers.deleted_permanently', ['customer' => $customerName]));
    }

    /**
     * @param ManageCustomerRequest $request
     * @param Customer              $deletedCustomer
     *
     * @throws \App\Exceptions\GeneralException
     * @return mixed
     */
    public function restore(ManageCustomerRequest $request, Customer $deletedCustomer)
    {
        $customerName = $deletedCustomer->name;

        $this->customerRepository->restore($deletedCustomer);

        return redirect()->route('admin.customer.index')->withFlashSuccess(__('alerts.backend.customers.restored', ['customer' => $customerName]));
    }
}
