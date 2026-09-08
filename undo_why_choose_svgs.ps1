
# Original 6 SVGs that were in the icon-circles (same across all pages)
$originalSVGs = @(
    '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M6 8l3 3-3 3M11 14h6"/></svg>',
    '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><polyline points="3 20 21 20"/></svg>',
    '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>',
    '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>',
    '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
)

$imgPattern = '<div class="icon-circle"><img src="[^"]*" alt="[^"]*" style="[^"]*"></div>'

$files = @(
    "index.html","index1.html","indexandroid1.html","indexapp1.html","indexecom1.html",
    "indexemail1.html","indexflutter1.html","indexfront1.html","indexinfluence1.html",
    "indexios1.html","indexmanage1.html","indexreact1.html","indexsem1.html",
    "indexseo1.html","indexseocontent1.html","indexsmmarket1.html","indexuiux1.html",
    "indexweb1.html","indexword1.html"
)

foreach ($fileName in $files) {
    if (-not (Test-Path $fileName)) {
        Write-Host "SKIP (not found): $fileName"
        continue
    }

    $content = Get-Content $fileName -Raw -Encoding UTF8

    # Replace each img occurrence one-by-one in order with the matching SVG
    $svgIndex = 0
    $newContent = [regex]::Replace($content, $imgPattern, {
        param($match)
        if ($svgIndex -lt $originalSVGs.Count) {
            $svg = $originalSVGs[$svgIndex]
            $svgIndex++
            return "<div class=`"icon-circle`">$svg</div>"
        }
        return $match.Value
    })

    [System.IO.File]::WriteAllText((Resolve-Path $fileName), $newContent, [System.Text.Encoding]::UTF8)

    $svgCountAfter = ([regex]::Matches($newContent, 'class="icon-circle"><svg')).Count
    $imgCountAfter = ([regex]::Matches($newContent, 'class="icon-circle"><img')).Count
    Write-Host "RESTORED: $fileName | SVGs=$svgCountAfter | imgs remaining=$imgCountAfter"
}

Write-Host "`nAll files restored to original!"
