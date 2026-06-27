$outDir = Join-Path $PSScriptRoot "..\public\images\page-heroes"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$downloads = @{
  "services.jpg" = "https://tempfile.aiquickdraw.com/aistudio/ef53f7c17d71e8b24f4943bc3a6dc272_1782405431975.png"
  "residential-epoxy-flooring.jpg" = "https://tempfile.aiquickdraw.com/workers/nano/image_1782405459454_m9svbw.png"
  "commercial-epoxy-flooring.jpg" = "https://tempfile.aiquickdraw.com/workers/nano/image_1782405435508_xfbd6r.png"
  "anti-slip-coating.jpg" = "https://tempfile.aiquickdraw.com/aistudio/aa0705f1d25d2248b1e138d97cc104e7_1782405433749.png"
  "metallic-epoxy-flooring.jpg" = "https://tempfile.aiquickdraw.com/workers/nano/image_1782405440878_br7f6c.png"
  "flake-chip-epoxy-flooring.jpg" = "https://tempfile.aiquickdraw.com/aistudio/fad47324754553d115bf4ebd14271452_1782405432029.png"
  "quartz-epoxy-flooring.jpg" = "https://tempfile.aiquickdraw.com/workers/nano/image_1782405439537_iovvbv.png"
  "solid-color-epoxy-flooring.jpg" = "https://tempfile.aiquickdraw.com/p/c0eb3b49f23f1b5895d569e707e91123_1_1782405461_2356.png"
  "marble-epoxy-flooring.jpg" = "https://tempfile.aiquickdraw.com/workers/nano/image_1782405446367_vk284i.png"
  "locations.jpg" = "https://tempfile.aiquickdraw.com/aistudio/2f4a06153ba66cfa51abe17039e192d0_1782405445284.png"
  "cedar-rapids.jpg" = "https://tempfile.aiquickdraw.com/aistudio/cb13ed842f7c9a10b5b7a041963b3959_1782405448634.png"
  "iowa-city.jpg" = "https://tempfile.aiquickdraw.com/workers/nano/image_1782405456482_2nw7xu.png"
  "dubuque.jpg" = "https://tempfile.aiquickdraw.com/aistudio/b06d3d4ee27276330b3f78c7c6d4423a_1782405448525.png"
  "waterloo.jpg" = "https://tempfile.aiquickdraw.com/aistudio/f6491d30f57d10e131285d9d76f75fa5_1782405467395.png"
  "cedar-falls.jpg" = "https://tempfile.aiquickdraw.com/workers/nano/image_1782405467631_2wfhfr.png"
  "davenport.jpg" = "https://tempfile.aiquickdraw.com/aistudio/5c979c86e362b38c359be46e084e37f2_1782405461616.png"
  "des-moines.jpg" = "https://tempfile.aiquickdraw.com/workers/nano/image_1782405465264_owjxg9.png"
  "sioux-city.jpg" = "https://tempfile.aiquickdraw.com/workers/nano/image_1782405470494_cutyll.png"
  "our-work.jpg" = "https://tempfile.aiquickdraw.com/aistudio/5a99e359af90c5965a0877c0d43c3625_1782405448639.png"
  "our-work-residential.jpg" = "https://tempfile.aiquickdraw.com/workers/nano/image_1782405467085_0wmi31.png"
  "our-work-commercial.jpg" = "https://tempfile.aiquickdraw.com/p/1c8faea00647cd3a53772f0ab20c23aa_1_1782405478_4551.png"
  "our-work-before-after.jpg" = "https://tempfile.aiquickdraw.com/p/512d8b4c151554fe7864f4afc01850b3_1_1782405487_8881.png"
}

foreach ($entry in $downloads.GetEnumerator()) {
  $dest = Join-Path $outDir $entry.Key
  Invoke-WebRequest -Uri $entry.Value -OutFile $dest -UseBasicParsing
  Write-Host "Downloaded $($entry.Key)"
}

Write-Host "Done - $($downloads.Count) images saved to $outDir"
