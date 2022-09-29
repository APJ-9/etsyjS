# etsyjS

```
//Get Data from JSON
function starcontent(){
    const xhr = new XMLHttpRequest();

    xhr.open('Get', 'Dom.json',true);

    xhr.onload = function() {
        if (this.status === 200) {
            const star = JSON.parse(this.responseText);

            for(let item in star){

                getChildElements(star[item].id , parseFloat(star[item].rating));
                addReview(star[item].id, star[item].review, star[item].weekabout);
                // console.log(star[item].id , parseFloat(star[item].rating));
                // console.log(star[item].id, star[item].review, star[item].weekabout);
            }
        }
    }
    xhr.send()
}
```
