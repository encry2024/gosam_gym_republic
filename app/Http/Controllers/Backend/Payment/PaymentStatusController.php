<?php

namespace App\Http\Controllers\Backend\Payment;

use App\Models\Payment\Payment;
use App\Http\Controllers\Controller;
use App\Repositories\Backend\PaymentRepository;
use App\Http\Requests\Backend\Payment\ManagePaymentRequest;
use Auth;

/**
 * Class PaymentStatusController.
 */
class PaymentStatusController extends Controller
{
    /**
     * @var PaymentRepository
     */
    protected $paymentRepository;

    /**
     * @param PaymentRepository $paymentRepository
     */
    public function __construct(PaymentRepository $paymentRepository)
    {
        $this->paymentRepository = $paymentRepository;
    }

    /**
     * @param ManagePaymentRequest $request
     *
     * @return mixed
     */
    public function getDeleted(ManagePaymentRequest $request)
    {
        return view('backend.payment.deleted')
            ->withPayments($this->paymentRepository->getDeletedPaginated(25, 'id', 'asc'));
    }

    /**
     * @param ManagePaymentRequest $request
     * @param Payment              $deletedPayment
     *
     * @throws \App\Exceptions\GeneralException
     * @throws \Throwable
     * @return mixed
     */
    public function delete(ManagePaymentRequest $request, Payment $deletedPayment)
    {
        $paymentAmount = $deletedPayment->amount;

        $this->paymentRepository->forceDelete($deletedPayment);

        return redirect()->route('admin.payment.deleted')->withFlashSuccess(__('alerts.backend.payments.deleted_permanently', ['payment' => $paymentAmount]));
    }

    /**
     * @param ManagePaymentRequest $request
     * @param Payment              $deletedPayment
     *
     * @throws \App\Exceptions\GeneralException
     * @return mixed
     */
    public function restore(ManagePaymentRequest $request, Payment $deletedPayment)
    {
        $paymentAmount = $deletedPayment->amount;

        $this->paymentRepository->restore($deletedPayment);

        return redirect()->route('admin.payment.index')->withFlashSuccess(__('alerts.backend.payments.restored', ['payment' => $paymentAmount]));
    }
}
