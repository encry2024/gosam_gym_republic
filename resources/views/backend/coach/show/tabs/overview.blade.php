<div class="form-group">
    <label for="FirstName">First Name</label>
    <input class="form-control" id="FirstName" name="first_name" value="{{ $coach->first_name }}" disabled>
</div>

<div class="form-group">
    <label for="LastName">Last Name</label>
    <input class="form-control" id="LastName" name="last_name" value="{{ $coach->last_name }}" disabled>
</div>

<div class="form-group">
    <label for="Address">Address</label>
    <textarea class="form-control" id="Address" name="address" disabled>{{ $coach->address }}</textarea>
</div>

<div class="form-group">
    <label for="ContactNumber">Contact Number</label>
    <input class="form-control" id="ContactNumber" name="contact_number" value="{{ $coach->contact_number }}" disabled>
</div>