<?php

namespace App\Listeners\Backend\Payment;

/**
 * Class PaymentEventListener.
 */
class PaymentEventListener
{
    /**
     * @param $event
     */
    public function onCreated($event)
    {
        \Log::info('User "'.$event->doer.'" Created Payment "'.$event->object.'"');
    }

    /**
     * @param $event
     */
    public function onUpdated($event)
    {
        \Log::info('User "'.$event->doer.'" Updated Payment "'.$event->object.'"');
    }

    /**
     * @param $event
     */
    public function onDeleted($event)
    {
        \Log::info('User "'.$event->doer.'" Deleted Payment "'.$event->object.'"');
    }

    /**
     * @param $event
     */
    public function onPermanentlyDeleted($event)
    {
        \Log::info('User "'.$event->doer.'" Permanently Payment "'.$event->object.'" Deleted');
    }

    /**
     * @param $event
     */
    public function onRestored($event)
    {
        \Log::info('User "'.$event->doer.'" Restored Payment "'.$event->object.'"');
    }

    /**
     * Register the listeners for the subscriber.
     *
     * @param \Illuminate\Events\Dispatcher $events
     */
    public function subscribe($events)
    {
        $events->listen(
            \App\Events\Backend\Payment\PaymentCreated::class,
            'App\Listeners\Backend\Payment\PaymentEventListener@onCreated'
        );

        $events->listen(
            \App\Events\Backend\Payment\PaymentUpdated::class,
            'App\Listeners\Backend\Payment\PaymentEventListener@onUpdated'
        );

        $events->listen(
            \App\Events\Backend\Payment\PaymentDeleted::class,
            'App\Listeners\Backend\Payment\PaymentEventListener@onDeleted'
        );

        $events->listen(
            \App\Events\Backend\Payment\PaymentPermanentlyDeleted::class,
            'App\Listeners\Backend\Payment\PaymentEventListener@onPermanentlyDeleted'
        );

        $events->listen(
            \App\Events\Backend\Payment\PaymentRestored::class,
            'App\Listeners\Backend\Payment\PaymentEventListener@onRestored'
        );
    }
}
