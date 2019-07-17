const RecommendList = function (list1, list2) {
    let reclist = []
    let i = 0
    let k = 0
    let numlst = []
    while (i < list1.length || k < list2.length) {
        if (list2[0] == undefined) {
            list1[i].score = Math.round(list1[i].vote_average)
            reclist.push(list1[i])
            numlst.push(list1[i].score)
        }
        else {
            if(list1[i] == undefined){
                list2[k].score = Math.round(list2[k].vote_average)
                reclist.push(list2[k])
                numlst.push(list2[k].score)
            }
            else{
                list1[i].score = Math.round(list1[i].vote_average)
                list2[k].score = Math.round(list2[k].vote_average)
    
                if (list1[i].original_title == list2[k].original_title) {
                    list1[i].score++
                    reclist.push(list1[i])
                    numlst.push(list1[i].score)
                    
                }
    
                else {
                    reclist.push(list1[i])
                    reclist.push(list2[k])
                    numlst.push(list1[i].score)
                    numlst.push(list2[k].score)
                }
            }
        }


        i++
        k++
    }

    let finlst = []
    console.log("reclist:" + reclist.length)
    console.log("numlst:" + numlst.length)
    numlst.sort(function (a, b) { return a - b })
    let j = numlst.length - 1
    while (j >= 0) {
        let count = 0
        for (let movie of reclist) {
            if (movie.score == numlst[j]) {
                finlst.push(movie)
                reclist.splice(count,1)
                count ++
            }
        }
        j--
    }
    console.log("finlst:" + finlst.length)
    return finlst
}


module.exports = RecommendList
