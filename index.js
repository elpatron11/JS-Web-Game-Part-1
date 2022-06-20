function newImage(Path, leftPosition, bottomPosition ){
let imgName = document.createElement('img')
imgName.src = Path
 imgName.style.position = 'fixed'
imgName.style.left = leftPosition
imgName.style.bottom = bottomPosition
document.body.append(imgName)
}

function newItem(Path,leftPosition,bottomPosition  ){
let item = document.createElement('img')
item.src = Path
item.position = 'fixed'
item.left = leftPosition
item.bottom = bottomPosition
document.body.append(item)
item.addEventListener('dblclick', function(){
    item.remove()
})

// function Background(Path, leftPosition, bottomPosition ){
// let imgName = document.createElement('img')
// imgName.src = Path
//  imgName.style.position = 'fixed'
// imgName.style.left = leftPosition
// imgName.style.bottom = bottomPosition
// document.body.append(imgName)
// }

// Background('assets/grass.png', '1366', '657')

console.log(window.innerWidth, window.innerHeight)



}

newImage( 'assets/green-character.gif', '100px', '100px' )
newImage( 'assets/pine-tree.png', '450px', '200px')
newImage( 'assets/pillar.png', '350px', '100px')
newImage( 'assets/tree.png', '200px', '300px')
newImage( 'assets/crate.png', '150px', '200px')
newImage( 'assets/well.png', '500px', '425px')


newItem('assets/sword.png', '165px', '185px')
newItem('assets/sheild.png', '500px', '405px')

newItem('assets/staff.png', '600px', '100px')



