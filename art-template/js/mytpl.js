<script id="test" type="text/html">
<ul>
{{each $data.goods}}
    <li>
        <a href="{{ $data.goods[$index].links }}">
            <img src="{{ $data.goods[$index].imgUrl }}" />
            <p>
                <h5>{{ $data.goods[$index].proName }}</h5>
                <span>{{ $data.goods[$index].price }}</span>
            </p>
        </a>
    </li>
{{/each}}
</ul>
</script>