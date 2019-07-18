<div class='animated fadeInUp'>
    <table class='table table-bordered table-hover'>
        <tbody>
        @foreach($customers as $customer)
            <tr>
                <td>{{ $customer->name }}</td>
            </tr>
        @endforeach
        </tbody>
    </table>
</div>

{!! $customers->render() !!}

@push('before-scripts')
    <script>
        $(window).on('hashchange', function() {
            if (window.location.hash) {
                var page = window.location.hash.replace('#', '');
                if (page == Number.NaN || page <= 0) {
                    return false;
                }else{
                    getData(page);
                }
            }
        });

        $(function () {
            $(document).on('click', '.pagination a', function (event) {
                event.preventDefault();

                var page = $(this).attr('href').split('page=')[1];

                getData(page);
            });
        });

        function getData(page) {
            $.ajax({
                url: '?page=' + page,
                dataType: "html"
            }).done(function (data) {
                location.hash = page;
                resultContainer.html(data);
            }).fail(function (jqXHR, ajaxOptions, thrownError) {
                alert('No response from server');
            });
        }
    </script>
@endpush
