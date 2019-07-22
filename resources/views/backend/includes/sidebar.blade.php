<div class="sidebar">
    <nav class="sidebar-nav">
        <ul class="nav">
            <li class="nav-title">
                @lang('menus.backend.sidebar.general')
            </li>

            <li class="nav-item">
                <a class="nav-link {{
                    active_class(Active::checkUriPattern('admin/dashboard'))
                }}" href="{{ route('admin.dashboard') }}">
                    <i class="nav-icon fab fa-dashcube"></i> @lang('menus.backend.sidebar.dashboard')
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link {{ active_class(Active::checkUriPattern('admin/logs*')) }}"
                   href="{{ route('admin.logs.index') }}">
                    <i class="nav-icon fas fa-book-open"></i> Log Book
                </a>
            </li>

            <li class="nav-item nav-dropdown {{
                active_class(Active::checkUriPattern('admin/activity*'), 'open')
                }}">
                <a class="nav-link nav-dropdown-toggle {{
                    active_class(Active::checkUriPattern('admin/activity*'))
                }}" href="#">
                    <i class="nav-icon fas fa-dumbbell"></i> Activities
                </a>

                <ul class="nav-dropdown-items">
                    <li class="nav-item">
                        <a class="nav-link {{
                            active_class(Active::checkUriPattern('admin/activity'))
                            }}" href="{{ route('admin.activity.index') }}">
                            List
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link {{
                            active_class(Active::checkUriPattern('admin/activity/create'))
                            }}" href="{{ route('admin.activity.create') }}">
                            Create
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link {{
                            active_class(Active::checkUriPattern('admin/activity/deleted'))
                            }}" href="{{ route('admin.activity.deleted') }}">
                            Deleted
                        </a>
                    </li>
                </ul>
            </li> <!-- activity -->

            <li class="nav-item nav-dropdown {{
                active_class(Active::checkUriPattern('admin/coach*'), 'open')
                }}">
                <a class="nav-link nav-dropdown-toggle {{
                    active_class(Active::checkUriPattern('admin/coach*'))
                }}" href="#">
                    <i class="nav-icon fas fa-chalkboard-teacher"></i> Coaches
                </a>

                <ul class="nav-dropdown-items">
                    <li class="nav-item">
                        <a class="nav-link {{
                            active_class(Active::checkUriPattern('admin/coach'))
                            }}" href="{{ route('admin.coach.index') }}">
                            List
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link {{
                            active_class(Active::checkUriPattern('admin/coach/create'))
                            }}" href="{{ route('admin.coach.create') }}">
                            Create
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link {{
                            active_class(Active::checkUriPattern('admin/coach/deleted'))
                            }}" href="{{ route('admin.coach.deleted') }}">
                            Deleted
                        </a>
                    </li>
                </ul>
            </li> <!-- coach -->

            <li class="nav-item nav-dropdown {{
                active_class(Active::checkUriPattern('admin/customer*'), 'open')
                }}">
                <a class="nav-link nav-dropdown-toggle {{
                    active_class(Active::checkUriPattern('admin/customer*'))
                }}" href="#">
                    <i class="nav-icon fas fa-users"></i> Customers
                </a>

                <ul class="nav-dropdown-items">
                    <li class="nav-item">
                        <a class="nav-link {{
                            active_class(Active::checkUriPattern('admin/customer'))
                            }}" href="{{ route('admin.customer.index') }}">
                            List
                        </a>
                    </li>

                    {{-- <li class="nav-item">
                        <a class="nav-link {{
                            active_class(Active::checkUriPattern('admin/customer/create'))
                            }}" href="{{ route('admin.customer.create') }}">
                            Create
                        </a>
                    </li> --}}

                    <li class="nav-item">
                        <a class="nav-link {{
                            active_class(Active::checkUriPattern('admin/customer/deleted'))
                            }}" href="{{ route('admin.customer.deleted') }}">
                            Deleted
                        </a>
                    </li>
                </ul>
            </li> <!-- customer -->

            <li class="nav-item nav-dropdown {{
                active_class(Active::checkUriPattern('admin/membership*'), 'open')
                }}">
                <a class="nav-link nav-dropdown-toggle {{
                    active_class(Active::checkUriPattern('admin/membership*'))
                }}" href="#">
                    <i class="nav-icon fas fa-certificate"></i> Memberships
                </a>

                <ul class="nav-dropdown-items">
                    <li class="nav-item">
                        <a class="nav-link {{
                            active_class(Active::checkUriPattern('admin/membership/'))
                            }}" href="{{ route('admin.membership.index') }}">
                            List
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link {{
                            active_class(Active::checkUriPattern('admin/membership/create'))
                            }}" href="{{ route('admin.membership.create') }}">
                            Create
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link {{
                            active_class(Active::checkUriPattern('admin/membership/deleted'))
                            }}" href="{{ route('admin.membership.deleted') }}">
                            Deleted
                        </a>
                    </li>
                </ul>
            </li> <!-- customer -->

            <li class="nav-title">
                @lang('menus.backend.sidebar.system')
            </li>

            @if ($logged_in_user->isAdmin())

                <li class="nav-item nav-dropdown {{
                    active_class(Active::checkUriPattern('admin/payment*'), 'open')
                    }}">
                    <a class="nav-link nav-dropdown-toggle {{
                        active_class(Active::checkUriPattern('admin/payment*'))
                    }}" href="#">
                        <i class="nav-icon fas fa-money-bill"></i> Payments
                    </a>

                    <ul class="nav-dropdown-items">
                        <li class="nav-item">
                            <a class="nav-link {{
                            active_class(Active::checkUriPattern('admin/payment'))
                            }}" href="{{ route('admin.payment.index') }}">
                                List
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link {{
                            active_class(Active::checkUriPattern('admin/payment/deleted'))
                            }}" href="{{ route('admin.payment.deleted') }}">
                                Deleted
                            </a>
                        </li>
                    </ul>
                </li> <!-- payments -->

                <li class="nav-item nav-dropdown {{
                    active_class(Active::checkUriPattern('admin/auth*'), 'open')
                }}">
                    <a class="nav-link nav-dropdown-toggle {{
                        active_class(Active::checkUriPattern('admin/auth*'))
                    }}" href="#">
                        <i class="nav-icon far fa-user"></i>
                        @lang('menus.backend.access.title')

                        @if ($pending_approval > 0)
                            <span class="badge badge-danger">{{ $pending_approval }}</span>
                        @endif
                    </a>

                    <ul class="nav-dropdown-items">
                        <li class="nav-item">
                            <a class="nav-link {{
                                active_class(Active::checkUriPattern('admin/auth/user*'))
                            }}" href="{{ route('admin.auth.user.index') }}">
                                @lang('labels.backend.access.users.management')

                                @if ($pending_approval > 0)
                                    <span class="badge badge-danger">{{ $pending_approval }}</span>
                                @endif
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link {{
                                active_class(Active::checkUriPattern('admin/auth/role*'))
                            }}" href="{{ route('admin.auth.role.index') }}">
                                @lang('labels.backend.access.roles.management')
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="divider"></li>

                <li class="nav-item nav-dropdown {{
                    active_class(Active::checkUriPattern('admin/log-viewer*'), 'open')
                }}">
                    <a class="nav-link nav-dropdown-toggle {{
                            active_class(Active::checkUriPattern('admin/log-viewer*'))
                        }}" href="#">
                        <i class="nav-icon fas fa-list"></i> @lang('menus.backend.log-viewer.main')
                    </a>

                    <ul class="nav-dropdown-items">
                        <li class="nav-item">
                            <a class="nav-link {{
                            active_class(Active::checkUriPattern('admin/log-viewer'))
                        }}" href="{{ route('log-viewer::dashboard') }}">
                                @lang('menus.backend.log-viewer.dashboard')
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link {{
                            active_class(Active::checkUriPattern('admin/log-viewer/logs*'))
                        }}" href="{{ route('log-viewer::logs.list') }}">
                                @lang('menus.backend.log-viewer.logs')
                            </a>
                        </li>
                    </ul>
                </li>
            @endif
        </ul>
    </nav>

    <button class="sidebar-minimizer brand-minimizer" type="button"></button>
</div><!--sidebar-->
