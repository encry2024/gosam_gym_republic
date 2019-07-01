<div class="col">
    <div class="form-group row">
        {{ html()->label(__('validation.attributes.backend.customers.first_name'))->class('col-md-4 form-control-label')->for('first_name') }}

        <div class="col-md-8">
            {{ html()->text('first_name')
                ->class('form-control')
                ->placeholder(__('validation.attributes.backend.customers.first_name'))
                ->attribute('maxlength', 191)
                ->required()
                ->autofocus() }}
        </div><!--col-->
    </div><!--form-group-->

    <div class="form-group row">
    {{ html()->label(__('validation.attributes.backend.customers.last_name'))->class('col-md-4 form-control-label')->for('last_name') }}

        <div class="col-md-8">
            {{ html()->text('last_name')
                ->class('form-control')
                ->placeholder(__('validation.attributes.backend.customers.last_name'))
                ->attribute('maxlength', 191)
                ->required() }}
        </div><!--col-->
    </div><!--form-group-->

    <div class="form-group row">
    {{ html()->label(__('validation.attributes.backend.customers.address'))->class('col-md-4 form-control-label')->for('address') }}

        <div class="col-md-8">
            {{ html()->textarea('address')
                ->class('form-control')
                ->placeholder(__('validation.attributes.backend.customers.address'))
                ->attribute('maxlength', 191)
                ->required() }}
        </div><!--col-->
    </div><!--form-group-->

    <div class="form-group row">
    {{ html()->label(__('validation.attributes.backend.customers.contact_number'))->class('col-md-4 form-control-label')->for('contact_number') }}

        <div class="col-md-8">
            {{ html()->text('contact_number')
                ->class('form-control')
                ->placeholder(__('validation.attributes.backend.customers.contact_number'))
                ->attribute('maxlength', 191)
                ->required() }}
        </div><!--col-->
    </div><!--form-group-->

    <div class="form-group row">
    {{ html()->label(__('validation.attributes.backend.customers.date_of_birth'))->class('col-md-4 form-control-label')->for('date_of_birth') }}

        <div class="col-md-8">
            {{ html()->date('date_of_birth')
                ->class('form-control')
                ->placeholder(__('validation.attributes.backend.customers.date_of_birth'))
                ->attribute('maxlength', 191)
                ->required() }}
        </div><!--col-->
    </div><!--form-group-->

    <div class="form-group row">
    {{ html()->label(__('validation.attributes.backend.customers.email'))->class('col-md-4 form-control-label')->for('email') }}

        <div class="col-md-8">
            {{ html()->email('email')
                ->class('form-control')
                ->placeholder(__('validation.attributes.backend.customers.email'))
                ->attribute('maxlength', 191)
                ->required() }}
        </div><!--col-->
    </div><!--form-group-->

    <div class="form-group row">
        {{ html()->label('Emergency No#')->class('col-md-4 form-control-label')->for('emergency_number') }}

        <div class="col-md-8">
            {{ html()->text('emergency_number')
                ->class('form-control')
                ->placeholder(__('validation.attributes.backend.customers.emergency_number'))
                ->attribute('maxlength', 191)
                ->required() }}
        </div><!--col-->
    </div><!--form-group-->
</div><!--col-->