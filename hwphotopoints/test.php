<?php
$exif = exif_read_data('https://heartwood.s3.amazonaws.com/2015/S/2015-S-S002A.jpg', 0, true);
            foreach ($exif as $key => $section) {
                foreach ($section as $name => $val) {
                    if($name=='MakerNote')
                        continue;
                    echo "$key.$name: $val<br />\n";
                }
            } 
            exit;
?>
