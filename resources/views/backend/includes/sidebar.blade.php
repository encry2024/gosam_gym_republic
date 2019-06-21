<!-- Sidebar -->
<div class="sidebar-fixed position-fixed">
    <a class="logo-wrapper waves-effect">
        <img src="{{ asset('gym1.jpg') }}" class="img-fluid" alt="" style="max-height: 540px;">
    </a>

    <div class="list-group list-group-flush">
        <a class="list-group-item list-group-item-action waves-effect {{ active_class(Active::checkUriPattern('admin/dashboard')) }}" href="{{ route('admin.dashboard') }}">
            <i class="fab fa-dashcube"></i> @lang('menus.backend.sidebar.dashboard')
        </a>
        <a class="list-group-item list-group-item-action waves-effect {{ active_class(Active::checkUriPattern('admin/coach')) }}" href="{{ route('admin.coach.index') }}">
            <i class="fas fa-chalkboard-teacher"></i> Coach
        </a>
        <a class="list-group-item list-group-item-action waves-effect {{ active_class(Active::checkUriPattern('admin/activity')) }}" href="{{ route('admin.activity.index') }}">
            <i class="fas fa-dumbbell"></i> Activities
        </a>
        <a class="list-group-item list-group-item-action waves-effect {{ active_class(Active::checkUriPattern('admin/membership/create')) }}" href="{{ route('admin.membership.create') }}">
            <i class="fas fa-certificate"></i> Membership
        </a>
        <a class="list-group-item list-group-item-action waves-effect {{
                                active_class(Active::checkUriPattern('admin/auth/user*'))
                            }}" href="{{ route('admin.auth.user.index') }}">
            <i class="nav-icon far fa-user"></i>
            @lang('labels.backend.access.users.management')

            @if ($pending_approval > 0)
                <span class="badge badge-danger">{{ $pending_approval }}</span>
            @endif
        </a>

        <a class="list-group-item list-group-item-action waves-effect {{ active_class(Active::checkUriPattern('admin/auth/role*')) }}" href="{{ route('admin.auth.role.index') }}">
            <i class="fas fa-lock"></i> @lang('labels.backend.access.roles.management')
        </a>

        <a class="list-group-item list-group-item-action waves-effect {{ active_class(Active::checkUriPattern('admin/log-viewer/logs*')) }}" href="{{ route('log-viewer::logs.list') }}">
            <i class="fas fa-list"></i> @lang('menus.backend.log-viewer.logs')
        </a>
    </div>
</div><!--sidebar-->