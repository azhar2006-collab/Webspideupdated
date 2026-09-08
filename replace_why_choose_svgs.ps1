
# Map each HTML file to its correct image
$fileImageMap = @{
    "index.html"            = "Why Work with webspide/Web Development Services/custom-web-development-services.webp"
    "index1.html"           = "Why Work with webspide/Web Development Services/back-end-development-services.webp"
    "indexandroid1.html"    = "Why Work with webspide/Android App Development/android-app-development-services.webp"
    "indexapp1.html"        = "Why Work with webspide/Digital Marketing Services/app-store-optimization-aso-services.webp"
    "indexecom1.html"       = "Why Work with webspide/Web Development Services/ecommerce-web-development-services.webp"
    "indexemail1.html"      = "Why Work with webspide/Digital Marketing Services/email-marketing-services.webp"
    "indexflutter1.html"    = "Why Work with webspide/Android App Development/flutter-app-development-services.webp"
    "indexfront1.html"      = "Why Work with webspide/Web Development Services/front-end-development-services.webp"
    "indexinfluence1.html"  = "Why Work with webspide/Digital Marketing Services/influencer-marketing-services.webp"
    "indexios1.html"        = "Why Work with webspide/Android App Development/ios-app-development-services.webp"
    "indexmanage1.html"     = "Why Work with webspide/Digital Marketing Services/social-media-management-services.webp"
    "indexreact1.html"      = "Why Work with webspide/Android App Development/react-native-app-development-services.webp"
    "indexsem1.html"        = "Why Work with webspide/Digital Marketing Services/search-engine-marketing-services.webp"
    "indexseo1.html"        = "Why Work with webspide/Digital Marketing Services/search-engine-optimization-services.webp"
    "indexseocontent1.html" = "Why Work with webspide/Digital Marketing Services/seo-content-writing-services.webp"
    "indexsmmarket1.html"   = "Why Work with webspide/Digital Marketing Services/social-media-marketing-services.webp"
    "indexuiux1.html"       = "Why Work with webspide/Web Development Services/ui-ux-design-services.webp"
    "indexweb1.html"        = "Why Work with webspide/Web Development Services/web-application-development-services.webp"
    "indexword1.html"       = "Why Work with webspide/Web Development Services/wordpress-development-services.webp"
}

foreach ($entry in $fileImageMap.GetEnumerator()) {
    $fileName = $entry.Key
    $imgSrc   = $entry.Value
    
    if (-not (Test-Path $fileName)) {
        Write-Host "SKIP (not found): $fileName"
        continue
    }
    
    $content = Get-Content $fileName -Raw -Encoding UTF8

    # Replace every <div class="icon-circle"><svg ...>...</svg></div> with <div class="icon-circle"><img ...></div>
    # The SVG can span multiple lines, so we use Singleline mode
    $imgTag = "<img src=`"$imgSrc`" alt=`"Why Work with Webspide`" style=`"width:100%;height:100%;object-fit:cover;border-radius:50%;`">"
    $pattern = '<div class="icon-circle"><svg[\s\S]*?</svg></div>'
    $replacement = "<div class=`"icon-circle`">$imgTag</div>"
    
    $newContent = [regex]::Replace($content, $pattern, $replacement)
    
    $svgCountBefore = ([regex]::Matches($content,   'class="icon-circle"><svg')).Count
    $svgCountAfter  = ([regex]::Matches($newContent, 'class="icon-circle"><svg')).Count
    $imgCountAfter  = ([regex]::Matches($newContent, 'class="icon-circle"><img')).Count
    
    [System.IO.File]::WriteAllText((Resolve-Path $fileName), $newContent, [System.Text.Encoding]::UTF8)
    Write-Host "DONE: $fileName | SVGs before=$svgCountBefore | SVGs remaining=$svgCountAfter | imgs added=$imgCountAfter"
}

Write-Host "`nAll done!"
