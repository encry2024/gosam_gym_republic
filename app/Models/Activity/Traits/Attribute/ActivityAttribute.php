<?php

namespace App\Models\Activity\Traits\Attribute;

/**
 * Trait ActivityAttribute.
 */
trait ActivityAttribute
{
    public function getMemberFeeAttribute()
    {
        return "PHP ".number_format($this->member_rate, 2)."";
    }

    public function getNonMemberFeeAttribute()
    {
        return "PHP ".number_format($this->non_member_rate, 2)."";
    }

    public function getCoachRateAttribute()
    {
        return "PHP ".number_format($this->coach_fee, 2)."";
    }

    public function getMonthlyFeeAttribute()
    {
        return "PHP ".number_format($this->monthly_rate, 2)."";
    }

    public function getMembershipRateAttribute()
    {
        return "PHP ".number_format($this->membership_fee, 2)."";
    }

    /**
     * @return string
     */
    public function getShowButtonAttribute()
    {
        return '<a href="'.route('admin.activity.show', $this).'" data-toggle="tooltip" data-placement="top" title="'.__('buttons.general.crud.view').'" class="btn btn-info"><i class="fas fa-eye"></i></a>';
    }

    /**
     * @return string
     */
    public function getEditButtonAttribute()
    {
        return '<a href="'.route('admin.activity.edit', $this).'" data-toggle="tooltip" data-placement="top" title="'.__('buttons.general.crud.edit').'" class="btn btn-primary"><i class="fas fa-edit"></i></a>';
    }

    /**
     * @return string
     */
    public function getChangePasswordButtonAttribute()
    {
        return '<a href="'.route('admin.activity.change-password', $this).'" class="dropdown-item">'.__('buttons.backend.access.users.change_password').'</a> ';
    }

    /**
     * @return string
     */
    public function getDeleteButtonAttribute()
    {
        return '<a href="'.route('admin.activity.destroy', $this).'"
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
        return '<a href="'.route('admin.activity.delete-permanently', $this).'" name="confirm_item" class="btn btn-danger"><i class="fas fa-trash" data-toggle="tooltip" data-placement="top" title="'.__('buttons.backend.access.users.delete_permanently').'"></i></a> ';
    }

    /**
     * @return string
     */
    public function getRestoreButtonAttribute()
    {
        return '<a href="'.route('admin.activity.restore', $this).'" name="confirm_item" class="btn btn-info"><i class="fas fa-sync" data-toggle="tooltip" data-placement="top" title="'.__('buttons.backend.access.users.restore_user').'"></i></a> ';
    }

    /**
     * @return string
     */
    public function getActionButtonsAttribute()
    {
        if ($this->trashed()) {
            return '
				<div class="btn-group-sm" role="group" aria-label="'.__('labels.backend.access.users.user_actions').'">
				  '.$this->restore_button.'
				  '.$this->delete_permanently_button.'
				</div>';
        }

        return '
    	<div class="btn-group-sm" role="group" aria-label="'.__('labels.backend.access.users.user_actions').'">
            '.$this->show_button.'
            '.$this->edit_button.'
            '.$this->delete_button.'
		  </div>
		</div>';
    }
}
