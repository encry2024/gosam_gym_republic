<?php

namespace App\Http\Controllers\Backend\Log;

use App\Models\Activity\Activity;
use App\Models\Customer\Customer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Backend\CustomerRepository;
use App\Repositories\Backend\LogRepository;

class LogController extends Controller
{
    /**
     * @var CustomerRepository
     */
    protected $customerRepository;
    protected $logRepository;

    /**
     * CustomerController constructor.
     *
     * @param CustomerRepository $customerRepository
     */
    public function __construct(CustomerRepository $customerRepository, LogRepository $logRepository)
    {
        $this->customerRepository = $customerRepository;
        $this->logRepository = $logRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $customers = Customer::paginate(20);

        if ($request->has('search')) {
            $filteredCustomers = $this->customerRepository->search($request->only('search'));

            $customers = $filteredCustomers;
        }


        return view('backend.log.index')->withCustomers($customers);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $log = $this->logRepository->create($request->only(
            'activity_id',
            'membership_id',
            'customer_id',
            'coach'
        ));

        return redirect()->route('admin.dashboard')
            ->withFlashSuccess("Customer {$log->customer->name} was successfully logged.");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function showCustomerLog(Customer $customer)
    {
        $existingActivities = [];
        $activities = Activity::all();

        foreach ($customer->memberships as $customerMembership) {
            $existingActivities[] = $customerMembership->activity->id;
        }

        return view('backend.log.create')
            ->withCustomer($customer->load('memberships'))
            ->withActivities($activities)
            ->withExistingActivities($existingActivities);
    }
}
