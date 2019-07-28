<?php

namespace App\Models\Membership\Traits\Attribute;

/**
 * Trait MembershipAttribute.
 */
trait MembershipAttribute
{
    public function getIncomeAttribute()
    {
        return $this->monthly_fee + $this->fee - $this->coach_fee;
    }

    public function getFeeStringAttribute()
    {
        return "PHP " . number_format($this->fee, 2);
    }

    public function getMonthlyFeeStringAttribute()
    {
        return "PHP " . number_format($this->monthly_fee, 2);
    }

    public function getCoachFeeStringAttribute()
    {
        return "PHP " . number_format($this->coach_fee, 2);
    }

    public function getStatusLabelAttribute()
    {
        if ($this->isActive()) {
            return "<span class='badge badge-success' style='font-weight: 400; font-size: 13px;'>".__('labels.general.active').'</span>';
        }

        return "<span class='badge badge-danger'>".__('labels.general.inactive').'</span>';
    }

    /**
     * @return string
     */
    public function getShowButtonAttribute()
    {
        return '<a href="'.route('admin.membership.show', $this).'" data-toggle="tooltip" data-placement="top" title="'.__('buttons.general.crud.view').'" class="btn btn-info"><i class="fas fa-eye"></i></a>';
    }

    /**
     * @return string
     */
    public function getEditButtonAttribute()
    {
        return '<a href="'.route('admin.membership.edit', $this).'" data-toggle="tooltip" data-placement="top" title="'.__('buttons.general.crud.edit').'" class="btn btn-primary"><i class="fas fa-edit"></i></a>';
    }

    /**
     * @return string
     */
    public function getChangePasswordButtonAttribute()
    {
        return '<a href="'.route('admin.membership.change-password', $this).'" class="dropdown-item">'.__('buttons.backend.memberships.change_password').'</a> ';
    }

    public function getActiveAttribute()
    {
        if ($this->activity_date_expiry == date('Y-m-d h:i')) {
            return 0;
        }

        return 1;
    }

    /**
     * @return string
     */
    public function getStatusButtonAttribute()
    {
        if ($this->activity_date_expiry == date('Y-m-d h:i')) {
            switch ($this->active) {
                case 0:
                    return '<a href="'.route('admin.membership.renew', [
                            $this,
                            1,
                        ]).'" class="dropdown-item">'.__('buttons.backend.memberships.renew').'</a> ';

                case 1:
                    return '<a href="'.route('admin.membership.cancel', [
                            $this,
                            0,
                        ]).'" class="dropdown-item">'.__('buttons.backend.memberships.deactivate').'</a> ';

                default:
                    return '';
            }
        }

        return '';
    }

    /**
     * @return string
     */
    public function getDeleteButtonAttribute()
    {
        return '<a href="'.route('admin.membership.destroy', $this).'"
            data-method="delete"
            class="btn btn-danger"
            data-trans-button-cancel="'.__('buttons.general.cancel').'"
            data-trans-button-confirm="'.__('buttons.general.crud.delete').'"
            data-trans-title="'.__('strings.backend.general.are_you_sure').'"
            class="dropdown-item"><i class="fa fa-trash"></i></a> ';
    }

    /**
     * @return string
     */
    public function getDeletePermanentlyButtonAttribute()
    {
        return '<a href="'.route('admin.membership.delete-permanently', $this).'" name="confirm_item" class="btn btn-danger"><i class="fas fa-trash" data-toggle="tooltip" data-placement="top" title="'.__('buttons.backend.memberships.delete_permanently').'"></i></a> ';
    }

    /**
     * @return string
     */
    public function getRestoreButtonAttribute()
    {
        return '<a href="'.route('admin.membership.restore', $this).'" name="confirm_item" class="btn btn-info"><i class="fas fa-sync" data-toggle="tooltip" data-placement="top" title="'.__('buttons.backend.memberships.restore_user').'"></i></a> ';
    }

    /**
     * @return string
     */
    public function getActionButtonsAttribute()
    {
        if ($this->trashed()) {
            return '
				<div class="btn-group-sm" role="group" aria-label="'.__('labels.backend.memberships.user_actions').'">
				  '.$this->restore_button.'
				  '.$this->delete_permanently_button.'
				</div>';
        }

        return '
    	<div class="btn-group-sm" role="group" aria-label="'.__('labels.backend.memberships.user_actions').'">
            '.$this->show_button.'
            '.$this->edit_button.'
            '.$this->status_button.'
            '.$this->delete_button.'
		  </div>
		</div>';
    }
}
