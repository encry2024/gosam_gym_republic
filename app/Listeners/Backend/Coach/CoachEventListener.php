<?php

namespace App\Listeners\Backend\Coach;

/**
 * Class CoachEventListener.
 */
class CoachEventListener
{
    /**
     * @param $event
     */
    public function onCreated($event)
    {
        \Log::info('User "'.$event->doer.'" Created Coach "'.$event->object.'"');
    }

    /**
     * @param $event
     */
    public function onUpdated($event)
    {
        \Log::info('User "'.$event->doer.'" Updated Coach "'.$event->object.'"');
    }

    /**
     * @param $event
     */
    public function onDeleted($event)
    {
        \Log::info('User "'.$event->doer.'" Deleted Coach "'.$event->object.'"');
    }

    /**
     * @param $event
     */
    public function onPermanentlyDeleted($event)
    {
        \Log::info('User "'.$event->doer.'" Permanently Coach "'.$event->object.'" Deleted');
    }

    /**
     * @param $event
     */
    public function onRestored($event)
    {
        \Log::info('User "'.$event->doer.'" Restored Coach "'.$event->object.'"');
    }

    /**
     * Register the listeners for the subscriber.
     *
     * @param \Illuminate\Events\Dispatcher $events
     */
    public function subscribe($events)
    {
        $events->listen(
            \App\Events\Backend\Coach\CoachCreated::class,
            'App\Listeners\Backend\Coach\CoachEventListener@onCreated'
        );

        $events->listen(
            \App\Events\Backend\Coach\CoachUpdated::class,
            'App\Listeners\Backend\Coach\CoachEventListener@onUpdated'
        );

        $events->listen(
            \App\Events\Backend\Coach\CoachDeleted::class,
            'App\Listeners\Backend\Coach\CoachEventListener@onDeleted'
        );

        $events->listen(
            \App\Events\Backend\Coach\CoachPermanentlyDeleted::class,
            'App\Listeners\Backend\Coach\CoachEventListener@onPermanentlyDeleted'
        );

        $events->listen(
            \App\Events\Backend\Coach\CoachRestored::class,
            'App\Listeners\Backend\Coach\CoachEventListener@onRestored'
        );
    }
}
