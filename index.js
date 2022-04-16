$(function () {
  var bgCarousel = document.querySelector('#bgCrousel')
  var bgCarousel = new bootstrap.Carousel(bgCarousel, {
    interval: 3000,
    wrap: false,
    touch: true
  })

  var tgCount = 0
  var interval, imgShapeTrans

  $('.show-me').click(() => {
    $('.img-container').toggle(1000, () => {
      $('.show-me').html(tgCount % 2 == 0 ? 'HIDE ME' : 'SHOW ME')
      $('.sub-text').fadeToggle(500)
      $('.hidden-portion').fadeToggle(500)

      if (tgCount % 2 == 1) {
        clearInterval(interval)
        clearInterval(imgShapeTrans)
        $('.main-title').css('color', '#000000')
        $('.know-text').html('KNOW')
        $('.my_img').css('border-radius', '0%')
      } else {
        interval = $(this).toggleColors(
          'main-title',
          ['#FF0000', '#00FF00', '#0000FF', '#FFFFFF', '#000000'],
          200
        )
        var percentageMax = 0
        $('.know-text').html('CLICK MY PHOTO')
        imgShapeTrans = setInterval(() => {
          $('.my_img').css(
            'border-radius',
            `${percentageMax == 50 ? 50 : (percentageMax += 5)}%`
          )
        }, 50)
      }
      tgCount = (tgCount + 1) % 2
    })
  })

  $('.open-ytb').click(() => {
    window.open('https://youtu.be/WnjoZbAVGlc', '_blank')
  })

  $('.my_img').click(() => {
    window.open(
      'https://www.facebook.com/AllHail.thePowerofJesusName',
      '_blank'
    )
    $('.know-text').html('YOU SAW MY FACEBOOK PROFILE?')
  })

  $.fn.toggleColors = (elClassName, colorList, speed) => {
    var colorLen = colorList.length
    var start = 0
    interval = setInterval(() => {
      $(`.${elClassName}`).css('color', colorList[start])
      start = (start + 1) % colorLen
    }, speed)
    return interval
  }
})
