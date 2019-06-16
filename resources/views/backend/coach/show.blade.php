@extends('backend.layouts.app')

@section('title', __('labels.backend.coaches.management') . ' | ' . __('labels.backend.coaches.view', ['coach' => $coach->name]))

@section('content')
<div class="row">
    <div class="col-4">
        <div class="card">
            <div class="card-body">
                <div class="card-title">
                    <h5>Coach Information</h5>
                </div>
                <hr>
                @include('backend.coach.show.tabs.overview')
            </div><!--card-body-->
        </div><!--card-->
    </div> <!--col-4-->
</div> <!-- row -->

<div class="row">
    <div class="col-4">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-5">
                        <h4 class="card-title mb-0">
                            Coach Activities
                        </h4>
                    </div><!--col-->

                    <div class="col-sm-7">
                        <div class="btn-toolbar float-right" role="toolbar" aria-label="@lang('labels.general.toolbar_btn_groups')">
                            <a href="#" data-toggle="modal" data-target="#assignActivitiesModal" class="btn btn-success ml-1" rel="tooltip" data-original-title="Assign Activities"><i class="fas fa-plus-circle"></i></a>
                        </div><!--btn-toolbar-->
                    </div><!--col-->
                </div>
                <!--  -->
                <hr>
                    <div class="row">
                        <div class="col">
                            @include('backend.coach.show.tabs.activities')
                        </div>
                    </div>
                </div>
            </div><!--card-body-->
        </div><!--card-->
    </div> <!--col-8-->
</div>

<!-- Add Activities Modal -->
<form action="{{ route('admin.coach.assignActivities', ['coach' => $coach->id]) }}" method="POST" class="modal fade in" tabindex="-1" role="dialog" id="assignActivitiesModal">
    {{ csrf_field() }}
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Add Activities</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="modal-body">
                <div class="form-group">
                    <label for="activities">Activities</label>
                    <select name="activities[]" id="activities" multiple class="activities form-control">
                        @foreach ($activities as $activity)
                            <option value="{{ $activity->name }}" {{ in_array($activity->name, $existingActivities) ? "selected" : "" }}>{{ $activity->name }}</option>
                        @endforeach
                    </select>
                </div>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-success">Save Activities</button>
            </div>
        </div>
    </div>
</form>

<!-- Update Activity Modal -->
<form class="modal fade in form-horizontal" role="dialog" id="updateActivityModal">
    {{ csrf_field() }}
    {{ method_field('PATCH') }}
    <input type="hidden" name="activity_id" id="activityId">

    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="updateActivityTitle"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="modal-body">
                <div class="form-group row">
                    {{ html()->label(__('validation.attributes.backend.activities.name'))->class('col-md-3 form-control-label')->for('name') }}

                    <div class="col-md-9">
                        {{ html()->text('name')
                            ->class('form-control')
                            ->placeholder(__('validation.attributes.backend.activities.name'))
                            ->attribute('maxlength', 191)
                            ->required()
                            ->autofocus() }}
                    </div><!--col-->
                </div><!--form-group-->

                <div class="form-group row">
                {{ html()->label(__('validation.attributes.backend.activities.member_rate'))->class('col-md-3 form-control-label')->for('member_rate') }}

                    <div class="col-md-9">
                        {{ html()->text('member_rate')
                            ->class('form-control')
                            ->placeholder(__('validation.attributes.backend.activities.member_rate'))
                            ->attribute('maxlength', 191)
                            ->required() }}
                    </div><!--col-->
                </div><!--form-group-->

                <div class="form-group row">
                {{ html()->label(__('validation.attributes.backend.activities.non_member_rate'))->class('col-md-3 form-control-label')->for('non_member_rate') }}
                    <div class="col-md-9">
                        {{ html()->text('non_member_rate')
                            ->class('form-control')
                            ->placeholder(__('validation.attributes.backend.activities.non_member_rate'))
                            ->attribute('maxlength', 191)
                            ->required() }}
                    </div><!--col-->
                </div><!--form-group-->

                <div class="form-group row">
                {{ html()->label(__('validation.attributes.backend.activities.coach_fee'))->class('col-md-3 form-control-label')->for('coach_fee') }}

                    <div class="col-md-9">
                        {{ html()->text('coach_fee')
                            ->class('form-control')
                            ->placeholder(__('validation.attributes.backend.activities.coach_fee'))
                            ->attribute('maxlength', 191)
                            ->required() }}
                    </div><!--col-->
                </div><!--form-group-->

                <div class="form-group row">
                {{ html()->label(__('validation.attributes.backend.activities.monthly_rate'))->class('col-md-3 form-control-label')->for('monthly_rate') }}

                    <div class="col-md-9">
                        {{ html()->text('monthly_rate')
                            ->class('form-control')
                            ->placeholder(__('validation.attributes.backend.activities.monthly_rate'))
                            ->attribute('maxlength', 191)
                            ->required() }}
                    </div><!--col-->
                </div><!--form-group-->

                <div class="form-group row">
                {{ html()->label(__('validation.attributes.backend.activities.membership_fee'))->class('col-md-3 form-control-label')->for('membership_fee') }}

                    <div class="col-md-9">
                        {{ html()->text('membership_fee')
                            ->class('form-control')
                            ->placeholder(__('validation.attributes.backend.activities.membership_fee'))
                            ->attribute('maxlength', 191)
                            ->required() }}
                    </div><!--col-->
                </div><!--form-group-->

                <div class="form-group row">
                {{ html()->label(__('validation.attributes.backend.activities.sessions'))->class('col-md-3 form-control-label')->for('sessions') }}

                    <div class="col-md-9">
                        {{ html()->text('sessions')
                            ->class('form-control')
                            ->placeholder(__('validation.attributes.backend.activities.sessions'))
                            ->attribute('maxlength', 191)
                            ->required() }}
                    </div><!--col-->
                </div><!--form-group-->

                <div class="form-group row">
                {{ html()->label(__('validation.attributes.backend.activities.quota'))->class('col-md-3 form-control-label')->for('quota') }}

                    <div class="col-md-9">
                        {{ html()->text('quota')
                            ->class('form-control')
                            ->placeholder(__('validation.attributes.backend.activities.quota'))
                            ->attribute('maxlength', 191)
                            ->required() }}
                    </div><!--col-->
                </div><!--form-group-->
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" id="cancelAddNewActivityBtn">Cancel</button>
                <button type="button" class="btn btn-success" id="updateActivityBtn">Update Activity</button>
            </div>
        </div>
    </div>
</form>

<!-- Verify Activity Modal -->
<div class="modal fade in" role="dialog" id="verifyAddActivityModal">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Added New Activity</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="modal-body">
                <label style="font-size: 1rem; color: #67757c;">Activity "<span id="activity_name"></span>" was not in the database and has now been added. Would you like to update the information now?</label>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" id="addLaterBtn">Update Later</button>
                <button type="button" class="btn btn-success" id="addNowBtn">Update Now</button>
            </div>
        </div>
    </div>
</div>
@endsection

@push('before-scripts')
<script>
    var activitiesDropdown = $('.activities'),
        activityName = "",
        activityId = "",
        exists = "",
        allowSelect = false;

    function getSelectedValue(name, evt)
    {
        if (!evt) {
            var args = "{}";
        } else {
            var args = JSON.stringify(evt.params, function (key, value) {
                if (value && value.nodeName) return "[DOM node]";
                if (value instanceof $.Event) return "[$.Event]";
                    return value;
            });
        }

        var obj = JSON.parse(args);

        return activityName = obj.args.data.id;
    }

    $(function () {
        $("#addLaterBtn").click(function() {
            $("#assignActivitiesModal").modal("show");
        });

        $('#addNowBtn').click(function () {
            $("#updateActivityTitle").text('Update '+activityName+' Activity Information');
            $('#verifyAddActivityModal').modal('hide');
            $('#updateActivityModal').modal('show');
        });

        $('#cancelAddNewActivityBtn').click(function () {
            $('#updateActivityModal').modal('hide');
            $("#assignActivitiesModal").modal("show");
        });

        $("[rel='tooltip']").tooltip();
    });

    $("form").bind("keypress", function (e) {
        if (e.keyCode == 13) {
            return false;
        }
    });

    $(".activities").select2({
        placeholder: 'Select Activities...',
        tags: true,
        tokenSeparators: [','],
        width: '100%',
        dropdownParent: $('#assignActivitiesModal')
    })
    .focus(function () {
        $(this).select2('focus');
    })
    .on('select2:selecting', function (e) {
        let selectedValue = getSelectedValue("select2:selecting", e);

        $.ajax({
            method: "POST",
            url: "{{ route('admin.activity.checkExistingActivity') }}",
            dataType: "JSON",
            data: {
                name: selectedValue,
                _token: '{!! csrf_token() !!}'
            },
            success: function (data) {
                if (data.status == "success") {
                    activityId = data.activity.id;

                    $("#activity_name").html(selectedValue);

                    $("#name").val(selectedValue);
                    $("#activityId").val(activityId);

                    $('#assignActivitiesModal').modal('hide');
                    $('#verifyAddActivityModal').modal('show');
                }
            }
        });
    })
    .on("select2:unselecting", function (e) {
        var select2_tag_val = $(".activities option[value='"+activityName+"']").data('select2-tag');

        if (select2_tag_val == true) {
            var option = new Option(activityName, activityName, false, false);
            $(e.target).append(option).change();
        }
    });

    $("#updateActivityBtn").on('click', function () {
        var url = "{{ route('admin.activity.update', ['activity' => ':activityId']) }}";
            url = url.replace(':activityId', activityId);

        $.ajax({
            method: "PATCH",
            url: url,
            data: $("#updateActivityModal").serialize(),
            dataType: "JSON",
            success: function (data) {
                Swal.fire({
                    title: "Activity was successfully updated.",
                    type: 'success'
                })
            }
        });
    });
</script>
@endpush