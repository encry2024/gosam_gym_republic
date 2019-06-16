<div class="form-group">
    <label for="FirstName">First Name</label>
    <input class="form-control" id="FirstName" name="first_name" value="{{ $customer->first_name }}" disabled>
</div>

<div class="form-group">
    <label for="LastName">Last Name</label>
    <input class="form-control" id="LastName" name="last_name" value="{{ $customer->last_name }}" disabled>
</div>

<div class="form-group">
    <label for="Address">Address</label>
    <textarea class="form-control" id="Address" name="address" disabled>{{ $customer->address }}</textarea>
</div>

<div class="form-group">
    <label for="ContactNumber">Contact Number</label>
    <input class="form-control" id="ContactNumber" name="contact_number" value="{{ $customer->contact_number }}" disabled>
</div>

<div class="form-group">
    <label for="EmergencyContactNumber">Emergency Contact Number</label>
    <input class="form-control" id="EmergencyContactNumber" name="emergency_number" value="{{ $customer->emergency_number }}" disabled>
</div>

<div class="form-group">
    <label for="DateOfBirth">Date of Birth</label>
    <input class="form-control" id="DateOfBirth" name="date_of_birth" value="{{ date('F d, Y', strtotime($customer->date_of_birth)) }}" disabled>
</div>

<div class="form-group">
    <label for="Age">Age</label>
    <input class="form-control" id="Age" name="age" value="{{ $customer->age }}" disabled>
</div>

<div class="form-group">
    <label for="MembershipStatus">Membership Status</label>
    <input class="form-control" id="MembershipStatus" name="membership_status" value="{{ $customer->membership_status }}" disabled>
</div>