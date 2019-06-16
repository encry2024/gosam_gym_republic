<?php

namespace App\Models\Customer\Traits\Attribute;

/**
 * Trait CustomerAttribute.
 */
trait CustomerAttribute
{
    public function getNameAttribute()
    {
        return $this->first_name . ' ' . $this->last_name;
    }

    /**
     * @return mixed
     */
    public function getPictureAttribute()
    {
        return $this->getPicture();
    }

    /**
     * @return string
     */
    public function getShowButtonAttribute()
    {
        return '<a href="'.route('admin.customer.show', $this).'" data-toggle="tooltip" data-placement="top" title="'.__('buttons.general.crud.view').'" class="btn btn-info"><i class="fas fa-eye"></i></a>';
    }

    /**
     * @return string
     */
    public function getEditButtonAttribute()
    {
        return '<a href="'.route('admin.customer.edit', $this).'" data-toggle="tooltip" data-placement="top" title="'.__('buttons.general.crud.edit').'" class="btn btn-primary"><i class="fas fa-edit"></i></a>';
    }

    /**
     * @return string
     */
    public function getChangePasswordButtonAttribute()
    {
        return '<a href="'.route('admin.customer.change-password', $this).'" class="dropdown-item">'.__('buttons.backend.access.users.change_password').'</a> ';
    }

    /**
     * @return string
     */
    public function getStatusButtonAttribute()
    {
        if ($this->id != auth()->id()) {
            switch ($this->active) {
                case 0:
                    return '<a href="'.route('admin.customer.mark', [
                        $this,
                        1,
                    ]).'" class="dropdown-item">'.__('buttons.backend.access.users.activate').'</a> ';

                case 1:
                    return '<a href="'.route('admin.customer.mark', [
                        $this,
                        0,
                    ]).'" class="dropdown-item">'.__('buttons.backend.access.users.deactivate').'</a> ';

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
        return '<a href="'.route('admin.customer.destroy', $this).'"
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
        return '<a href="'.route('admin.customer.delete-permanently', $this).'" name="confirm_item" class="btn btn-danger"><i class="fas fa-trash" data-toggle="tooltip" data-placement="top" title="'.__('buttons.backend.access.users.delete_permanently').'"></i></a> ';
    }

    /**
     * @return string
     */
    public function getRestoreButtonAttribute()
    {
        return '<a href="'.route('admin.customer.restore', $this).'" name="confirm_item" class="btn btn-info"><i class="fas fa-sync" data-toggle="tooltip" data-placement="top" title="'.__('buttons.backend.access.users.restore_user').'"></i></a> ';
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
