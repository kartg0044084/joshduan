<?php

namespace App\Http\Middleware;

use Closure;
use Log;
class TestLog
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $response = $next($request);
        log::info([
        $request->header(),
        $request->getMethod(),
        $request->getRequestUri(),
        $request->all(),
        $response->getStatusCode(),
        $response->getContent()
        ]);
        return $response;
        // return $next($request);
    }
}
