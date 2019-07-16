@extends('backend.layouts.app')

@section('title', app_name() . ' | ' . __('strings.backend.logs.title'))

@section('content')
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-sm-10">
                    <h4 class="card-title mb-0">
                        {{ __('labels.backend.logs.management') }}
                    </h4>
                </div><!--col-->
            </div><!--row-->
            <br>
            <div class="row mt-4 mb-4">
                <div class="col">
                    <div class="form-group">
                        <label for="search">Search Customer</label>

                        <input id="search" name="search" type="text" class="form-control">
                    </div>
                </div>

                <div style="
                top:10%;
                bottom:10%;
                border-left:1px solid #ccc;"></div>

                <div class="col">
                    <div class="form-group">
                        <label for="customerList">List</label>

                        <table class="table table-bordered" id="customerList">
                            <tbody>
                            <tr>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div style="
                top:10%;
                bottom:10%;
                border-left:1px solid #ccc;"></div>

                <div class="col">
                    <label for="">Information</label>
                </div>
            </div>
        </div><!--card-body-->
    </div><!--card-->
@endsection
