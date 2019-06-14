@extends('backend.layouts.app')

@section('title', app_name() . ' | ' . __('strings.backend.dashboard.title'))

@section('content')
    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-header">
                    <strong>@lang('strings.backend.dashboard.welcome') {{ $logged_in_user->name }}!</strong>
                </div><!--card-header-->
                <div class="card-body">
                <ul>
                    @forelse ($audits as $audit)
                        <li>
                            @lang('user.updated.metadata', $audit->getMetadata())

                            @foreach ($audit->getModified() as $attribute => $modified)
                            <ul>
                                <li>@lang('user.'.$audit->event.'.modified.'.$attribute, $modified)</li>
                            </ul>
                            @endforeach
                        </li>
                    @empty
                        <p>@lang('user.unavailable_audits')</p>
                    @endforelse
                </ul>
                </div><!--card-body-->
            </div><!--card-->
        </div><!--col-->
    </div><!--row-->
@endsection
