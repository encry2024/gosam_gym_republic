<?php

namespace App\Listeners\Backend\Membership;

/**
 * Class MembershipEventListener.
 */
class MembershipEventListener
{
    /**
     * @param $event
     */
    public function onCreated($event)
    {
        \Log::info('User "'.$event->doer.'" Created Membership "'.$event->object.'"');
    }

    /**
     * @param $event
     */
    public function onUpdated($event)
    {
        \Log::info('User "'.$event->doer.'" Updated Membership "'.$event->object.'"');
    }

    /**
     * @param $event
     */
    public function onDeleted($event)
    {
        \Log::info('User "'.$event->doer.'" Deleted Membership "'.$event->object.'"');
    }

    /**
     * @param $event
     */
    public function onPermanentlyDeleted($event)
    {
        \Log::info('User "'.$event->doer.'" Permanently Membership "'.$event->object.'" Deleted');
    }

    /**
     * @param $event
     */
    public function onRestored($event)
    {
        \Log::info('User "'.$event->doer.'" Restored Membership "'.$event->object.'"');
    }

    /**
     * @param $event
     */
    public function onMembershipRenewed($event)
    {
        \Log::info('User "'.$event->doer.'" renewed membership Activity "'.$event->activity.'" of Customer "'.$event->customer.'".');
    }

    /**
     * @param $event
     */
    public function onMembershipCancel($event)
    {
        \Log::info('User "'.$event->doer.'" cancelled membership Activity "'.$event->activity.'" of Customer "'.$event->customer.'".');
    }

    /**
     * Register the listeners for the subscriber.
     *
     * @param \Illuminate\Events\Dispatcher $events
     */
    public function subscribe($events)
    {
        $events->listen(
            \App\Events\Backend\Membership\MembershipCreated::class,
            'App\Listeners\Backend\Membership\MembershipEventListener@onCreated'
        );

        $events->listen(
            \App\Events\Backend\Membership\MembershipUpdated::class,
            'App\Listeners\Backend\Membership\MembershipEventListener@onUpdated'
        );

        $events->listen(
            \App\Events\Backend\Membership\MembershipDeleted::class,
            'App\Listeners\Backend\Membership\MembershipEventListener@onDeleted'
        );

        $events->listen(
            \App\Events\Backend\Membership\MembershipPermanentlyDeleted::class,
            'App\Listeners\Backend\Membership\MembershipEventListener@onPermanentlyDeleted'
        );

        $events->listen(
            \App\Events\Backend\Membership\MembershipRestored::class,
            'App\Listeners\Backend\Membership\MembershipEventListener@onRestored'
        );

        $events->listen(
            \App\Events\Backend\Membership\MembershipRenewed::class,
            'App\Listeners\Backend\Membership\MembershipEventListener@onMembershipRenewed'
        );

        $events->listen(
            \App\Events\Backend\Membership\MembershipCancel::class,
            'App\Listeners\Backend\Membership\MembershipEventListener@onMembershipCancel'
        );
    }
}
