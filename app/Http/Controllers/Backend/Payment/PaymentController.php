<?php

namespace App\Http\Controllers\Backend\Payment;

use App\Models\Payment\Payment;
use App\Http\Controllers\Controller;
use App\Events\Backend\Payment\PaymentDeleted;
use App\Repositories\Backend\PaymentRepository;
use App\Http\Requests\Backend\Payment\StorePaymentRequest;
use App\Http\Requests\Backend\Payment\ManagePaymentRequest;
use App\Http\Requests\Backend\Payment\UpdatePaymentRequest;
use Auth;

/**
 * Class PaymentController.
 */
class PaymentController extends Controller
{
    /**
     * @var PaymentRepository
     */
    protected $paymentRepository;

    /**
     * PaymentController constructor.
     *
     * @param PaymentRepository $paymentRepository
     */
    public function __construct(PaymentRepository $paymentRepository)
    {
        $this->paymentRepository = $paymentRepository;
    }

    /**
     * @param ManagePaymentRequest $request
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(ManagePaymentRequest $request)
    {
        return view('backend.payment.index')
            ->withPayments($this->paymentRepository->getActivePaginated(25, 'id', 'asc'));
    }

    /**
     * @param StorePaymentRequest $request
     *
     * @return mixed
     * @throws \Throwable
     */
    public function store(StorePaymentRequest $request)
    {
        $payment = $this->paymentRepository->create($request->only('amount'));

        return redirect()->route('admin.payment.index')->withFlashSuccess(__('alerts.backend.payments.created', ['amount' => $payment->amount]));
    }

    /**
     * @param ManagePaymentRequest $request
     * @param Payment              $payment
     *
     * @return mixed
     */
    public function show(ManagePaymentRequest $request, Payment $payment)
    {
        return view('backend.payment.show')
            ->withPayment($payment);
    }

    /**
     * @param ManagePaymentRequest $request
     * @param PermissionRepository $permissionRepository
     * @param Payment              $payment
     *
     * @return mixed
     */
    public function edit(UpdatePaymentRequest $request, Payment $payment)
    {
        return view('backend.payment.edit')->withPayment($payment);
    }

    /**
     * @param UpdatePaymentRequest $request
     * @param Payment              $payment
     *
     * @return mixed
     * @throws \Throwable
     * @throws \App\Exceptions\GeneralException
     */
    public function update(UpdatePaymentRequest $request, Payment $payment)
    {
        $payment = $this->paymentRepository->update($payment, $request->only('amount'));

        return redirect()->route('admin.payment.index')->withFlashSuccess(__('alerts.backend.payments.updated', ['amount' => $payment->amount]));
    }

    /**
     * @param ManagePaymentRequest $request
     * @param Payment              $payment
     *
     * @return mixed
     * @throws \Exception
     */
    public function destroy(ManagePaymentRequest $request, Payment $payment)
    {
        $paymentName = $payment->name;

        $payment = $this->paymentRepository->deleteById($payment->id);

        event(new PaymentDeleted(Auth::user()->full_name, $paymentName));

        return redirect()->route('admin.payment.deleted')->withFlashSuccess(__('alerts.backend.payments.deleted', ['payment' => $paymentName]));
    }
}
