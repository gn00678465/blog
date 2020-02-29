Write-Output "---------clean start---------";
hexo cl;
Write-Output "----------clean end---------";
Write-Output "---------generate start-----------";
hexo g;
Write-Output "----------generate end----------";
Write-Output "----------deploy start----------";
hexo d;
Write-Output "--------deploy end------";