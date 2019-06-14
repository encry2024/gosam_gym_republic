<?php

namespace App\Listeners\Backend\Activity;

/**
 * Class ActivityEventListener.
 */
class ActivityEventListener
{
    /**
     * @param $event
     */
    public function onCreated($event)
    {
        \Log::info('User "'.$event->doer.'" Created Activity "'.$event->object.'"');
    }

    /**
     * @param $event
     */
    public function onUpdated($event)
    {
        \Log::info('User "'.$event->doer.'" Updated Activity "'.$event->object.'"');
    }

    /**
     * @param $event
     */
    public function onDeleted($event)
    {
        \Log::info('User "'.$event->doer.'" Deleted Activity "'.$event->object.'"');
    }

    /**
     * @param $event
     */
    public function onPermanentlyDeleted($event)
    {
        \Log::info('User "'.$event->doer.'" Permanently Activity "'.$event->object.'" Deleted');
    }

    /**
     * @param $event
     */
    public function onRestored($event)
    {
        \Log::info('User "'.$event->doer.'" Restored Activity "'.$event->object.'"');
    }

    /**
     * Register the listeners for the subscriber.
     *
     * @param \Illuminate\Events\Dispatcher $events
     */
    public function subscribe($events)
    {
        $events->listen(
            \App\Events\Backend\Activity\ActivityCreated::class,
            'App\Listeners\Backend\Activity\ActivityEventListener@onCreated'
        );

        $events->listen(
            \App\Events\Backend\Activity\ActivityUpdated::class,
            'App\Listeners\Backend\Activity\ActivityEventListener@onUpdated'
        );

        $events->listen(
            \App\Events\Backend\Activity\ActivityDeleted::class,
            'App\Listeners\Backend\Activity\ActivityEventListener@onDeleted'
        );

        $events->listen(
            \App\Events\Backend\Activity\ActivityPermanentlyDeleted::class,
            'App\Listeners\Backend\Activity\ActivityEventListener@onPermanentlyDeleted'
        );

        $events->listen(
            \App\Events\Backend\Activity\ActivityRestored::class,
            'App\Listeners\Backend\Activity\ActivityEventListener@onRestored'
        );
    }
}
