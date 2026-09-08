# replace_laptop_svgs.ps1
# Replaces the laptop SVG illustration in the "Why Choose" section with real images
# in all files except index.html (which is the reference)

$base = "c:\Users\SYED AZHAR HUSSAIN A\Desktop\webspide"

# Mapping: filename -> [image path relative to project root, alt text]
$fileImageMap = @{
    "index1.html"           = @("Why Work with webspide/Web Development Services/back-end-development-services-transparent.png", "Backend Development Services")
    "indexandroid1.html"    = @("Why Work with webspide/Android App Development/android-app-development-services-transparent.png", "Android App Development Services")
    "indexapp1.html"        = @("Why Work with webspide/Digital Marketing Services/app-store-optimization-aso-services-transparent.png", "App Store Optimization Services")
    "indexecom1.html"       = @("Why Work with webspide/Web Development Services/ecommerce-web-development-services-transparent.png", "eCommerce Development Services")
    "indexemail1.html"      = @("Why Work with webspide/Digital Marketing Services/email-marketing-services-transparent.png", "Email Marketing Services")
    "indexflutter1.html"    = @("Why Work with webspide/Android App Development/flutter-app-development-services-transparent.png", "Flutter App Development Services")
    "indexfront1.html"      = @("Why Work with webspide/Web Development Services/front-end-development-services-transparent.png", "Front-End Development Services")
    "indexinfluence1.html"  = @("Why Work with webspide/Digital Marketing Services/influencer-marketing-services-transparent.png", "Influencer Marketing Services")
    "indexios1.html"        = @("Why Work with webspide/Android App Development/ios-app-development-services-transparent.png", "iOS App Development Services")
    "indexmanage1.html"     = @("Why Work with webspide/Digital Marketing Services/social-media-management-services-transparent.png", "Social Media Management Services")
    "indexreact1.html"      = @("Why Work with webspide/Android App Development/react-native-app-development-services-transparent.png", "React Native App Development Services")
    "indexsem1.html"        = @("Why Work with webspide/Digital Marketing Services/search-engine-marketing-services-transparent.png", "Search Engine Marketing Services")
    "indexseo1.html"        = @("Why Work with webspide/Digital Marketing Services/search-engine-optimization-services-transparent.png", "Search Engine Optimization Services")
    "indexseocontent1.html" = @("Why Work with webspide/Digital Marketing Services/seo-content-writing-services-transparent.png", "SEO Content Writing Services")
    "indexsmmarket1.html"   = @("Why Work with webspide/Digital Marketing Services/social-media-marketing-services-transparent.png", "Social Media Marketing Services")
    "indexuiux1.html"       = @("Why Work with webspide/Web Development Services/ui-ux-design-services-transparent.png", "UI/UX Design Services")
    "indexweb1.html"        = @("Why Work with webspide/Web Development Services/web-application-development-services-transparent.png", "Web Application Development Services")
    "indexword1.html"       = @("Why Work with webspide/Web Development Services/wordpress-development-services-transparent.png", "WordPress Development Services")
}

# The replacement image HTML (same style as index.html reference)
function Get-ImageHtml($src, $alt) {
    return @"
<img 
        src="$src" 
        alt="$alt" 
        class="laptop-image" 
        style="width:100%;height:auto;max-height:220px;object-fit:contain;display:block;" 
      >
"@
}

# Regex pattern to match the laptop SVG illustration inside .illustration div
# This captures everything from gear-left through laptop-bottom closing tags
$svgPattern = '(?s)(<div class="gear-left">.*?</div>\s*<div class="gear-sm">.*?</div>\s*<div class="code-tag">.*?</div>\s*<div class="laptop">.*?</div>\s*</div>)'

# Also handle the case where index1.html already has an img with wrong src
$wrongImgPattern = '(?s)(<img\s[^>]*class="laptop-image"[^>]*>)'

foreach ($fileName in $fileImageMap.Keys) {
    $filePath = Join-Path $base $fileName
    if (-not (Test-Path $filePath)) {
        Write-Host "SKIP (not found): $fileName"
        continue
    }

    $imgSrc = $fileImageMap[$fileName][0]
    $imgAlt = $fileImageMap[$fileName][1]
    $imgHtml = Get-ImageHtml $imgSrc $imgAlt

    $content = Get-Content $filePath -Raw -Encoding UTF8

    # Check if it has the laptop SVG pattern
    if ($content -match $svgPattern) {
        Write-Host "REPLACING SVG in: $fileName"
        $newContent = $content -replace $svgPattern, $imgHtml
        [System.IO.File]::WriteAllText($filePath, $newContent, [System.Text.Encoding]::UTF8)
        Write-Host "  -> Done. Image: $imgSrc"
    }
    # Check if it already has an img with laptop-image class (wrong image, e.g. index1.html)
    elseif ($content -match 'class="laptop-image"') {
        Write-Host "FIXING WRONG IMAGE in: $fileName"
        # Replace the src in the existing img tag
        $newContent = $content -replace 'src="Why Work with webspide/[^"]*transparent\.png"', "src=`"$imgSrc`""
        $newContent = $newContent -replace 'alt="[^"]*"(\s+class="laptop-image")', "alt=`"$imgAlt`"`$1"
        [System.IO.File]::WriteAllText($filePath, $newContent, [System.Text.Encoding]::UTF8)
        Write-Host "  -> Fixed. Image: $imgSrc"
    }
    else {
        Write-Host "WARNING: No pattern found in $fileName"
    }
}

Write-Host ""
Write-Host "=== All done! ==="
