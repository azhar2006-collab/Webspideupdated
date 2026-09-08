
# Map each HTML file to its correct image from "Why Work with webspide" folder
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

# This is the exact illustration block to find and replace (same in all files)
$oldBlock = '<div class="illustration">
      <div class="gear-left">?</div>
      <div class="gear-sm">?</div>
      <div class="code-tag">&lt;/&gt;</div>
      <div class="laptop">
        <div class="laptop-screen">
          <div class="screen-code"><span>function</span> <em>init</em>() {<br>&nbsp;&nbsp;<span>const</span> app = [];<br>&nbsp;&nbsp;<em>render</em>(app);<br>&nbsp;&nbsp;<span>return</span> app;<br>}</div>
        </div>
        <div class="laptop-base"></div>
        <div class="laptop-bottom"></div>
      </div>
    </div>'

foreach ($entry in $fileImageMap.GetEnumerator()) {
    $fileName = $entry.Key
    $imgSrc   = $entry.Value

    if (-not (Test-Path $fileName)) {
        Write-Host "SKIP (not found): $fileName"
        continue
    }

    $content = Get-Content $fileName -Raw -Encoding UTF8

    # Build the new image block replacing the whole illustration div
    $newBlock = "<div class=`"illustration`">
      <img src=`"$imgSrc`" alt=`"Why Work with Webspide`" style=`"width:100%;height:100%;object-fit:cover;border-radius:16px;display:block;`">
    </div>"

    if ($content.Contains($oldBlock)) {
        $newContent = $content.Replace($oldBlock, $newBlock)
        [System.IO.File]::WriteAllText((Resolve-Path $fileName), $newContent, [System.Text.Encoding]::UTF8)
        Write-Host "DONE: $fileName"
    } else {
        Write-Host "BLOCK NOT FOUND (trying regex): $fileName"
        # Fallback: use regex for slight whitespace variations
        $pattern = '<div class="illustration">[\s\S]*?<div class="laptop-bottom"></div>\s*</div>\s*</div>\s*</div>'
        $regexNew = "<div class=`"illustration`">`n      <img src=`"$imgSrc`" alt=`"Why Work with Webspide`" style=`"width:100%;height:100%;object-fit:cover;border-radius:16px;display:block;`">`n    </div>"
        $newContent = [regex]::Replace($content, $pattern, $regexNew)
        [System.IO.File]::WriteAllText((Resolve-Path $fileName), $newContent, [System.Text.Encoding]::UTF8)
        Write-Host "DONE (regex): $fileName"
    }
}

Write-Host "`nAll done! Illustration replaced with images in all files."
