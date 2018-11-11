const Popup ={
  data:{
    name:"Ryan",//姓名
    pic:"./img/head.png",//头像
    picIcon:'./img/true.png',//小图标
    gender:['男','女','保密'],//性别
    omit:'北京市',
    town:'东城区',
    careerStatus:1,//职业状态，1学生 2在职 3待业
    grade:'',//年级
    year:'',//年份
    occupation:'',//职业
    workTime:'',//工作时间
    gradeType:['高中及以下','专科','大学本科','研究生及以上'],//所在年级
    schoolEnter:'',//入学年份
    careerType:['技术','产品','设计','测试','运营'],//在职：产品 前端 后端；
    workExperience:['1年以下','1-2年','3-5年','6-10年','10年以上'],//工作年限
    directionType:['Web前端工程师','ios开发工程师','PHP工程师','Go语言工程师','Python Web工程师','Java Web前端工程师'],
    arrDirection:[],//职业方向选择
    levelType:[
    {item_id:114,name:'Web前端工程师'},
    {item_id:115,name:'ios开发工程师'},
    {item_id:116,name:'PHP工程师'}
    ],//水平方向类型
    levelLine:['one','two','three','four'],//水平线
    levelData:[
    {level_id:117,name:'完全不了解'},
    {level_id:118,name:'有点了解'},
    {level_id:119,name:'熟悉'},
    {level_id:120,name:'精通'}],//水平类型
  },
  init:function(){
    this.bind();
  },
  bind:function(){
    //弹出窗口
    $('.popup').on('click',this.showMask);
    //关闭窗口
    $('body').on('click','.container-close',this.removeMask);
    //性别下拉收起
    $('body').on('click','.sex-btn', this.toggleClass);
    //点击性别到input输入框中
    $('body').on('click','.sex-item',this.sexSelect);
    //省份下拉收起点击省插入html结构
    $('body').on('click','.province-btn',this.provinceClass);
    //点击省份city-item项到input输入框中
    $('body').on('click','.city-item',this.citySelect);
    //市下拉收起点击city-btn插入html结构
    $('body').on('click','.city-btn',this.btnClass);
    //点击市municipality-item项到input输入框中
    $('body').on('click','.municipality-item',this.municipalityItem);
    //点击当前状态时，高亮并显示所有的当前插入的dom
    $('body').on('click','.status-item',this.StatusItem)
    //年级列表下拉收起
    $('body').on('click','#gradeBtn',this.gradeClass)
    //点击年级项插入到input输入框
    $('body').on('click','.grade-item',this.gradeSelect);
    //年份列表下拉收起
    $('body').on('click','#yearBtn',this.yearClass)
    //点击年份项插入到input 输入框中
    $('body').on('click','.year-item',this.yearSelect)
    //点击职业列表下拉
    $('body').on('click','#occupationBtn',this.occuptionClass)
    //点击职位项插入到input中
    $('body').on('click','.occupation-item',this.occupationSelect)
    //点击年限列表下拉
    $('body').on('click','#workBtn',this.workClass)
    //点击年限项插入到input中
    $('body').on('click','.work-item',this.workSelect)
    //点击按钮到下一页
    $('body').on('click','#showSecTemplete.active',this.showSecondMask)
    //点击上一页按钮
    $('body').on('click','#showPreTemplete',this.showPreMask)
    //点击"course-item"项最多可选三个
    $('body').on('click','.course-item',this.directionSelect)
    //点击下一页按钮
    $('body').on('click','#showThreeTemplete.active',this.showThreeTemplete)
    //点击上一页按钮
    $('body').on('click','#showFrouPre',this.showFrouPre)
    //点击选择职业方向
    $('body').on('click','.level-item',this.levelItemSelect)
    //点击按钮跳转到下一页
    $('body').on('click','#showForeNext',this.showForeNext)
    //点击获取按钮判断是否输入手机号码和验证码
    $('body').on('click','.dynamic-code',this.dynamicCodeSend)
    //输入动态码
    $('body').on('input','.binding-num',this.inputCode)
    $('body').on('click','.certificate-next',this.showFiveNext)
  },
  showMask:function(){
    let html = Popup.createMaskHtml();
    $('body').append(html);
  },
  createMaskHtml:function(){
    let memberH = Popup.memberHTML();
    let html = `
      <div class="authentication-context">
        <div class="authentication-mask"></div>
        <div class="authentication-container">
          <div class="certificate-container">
            <div class="container-close"></div>
            <div class="certificate">
            ${memberH}
          </div>  
        </div>
      </div>`;
    return html;
  },
  memberHTML:function(){
    console.log(0);
    let genderHTML = this.genderHTML();
    let provinceHTML = this.provinceHTML();
    let gradeHTML = this.gradeHTML();
    let occupationHTML = this.occupationHTML();
    let workHTML = this.workHTML();
    let html = `
      <div class="certificate-member">
        <span class="number">第<span class="number-step">1</span>步/共3步</span>
        <h2 class="certificate-title">成为认证学员
          <img src="img/nember.png">
        </h2>
        <p class="certificate-desc">成为极客学院认证学员，点亮专属身份标识，
          <span>免费观看</span>全站80%以上会员课程</p>
      </div>
      <div class="certificate-message">
        <div class="certificate-avator">
          <img src="${Popup.data.pic}">
          <p class="nember-name">${Popup.data.name}</p>
        </div>
        <div class="certificate-from">
          <div class="from-one clearfix">
            <span class="sex">性别：</span>
            <div class="sex-container">
              <a href="javascript:;" id="sex-select" type="text" name = "sex" placeholder="保密">
                <a class="sex-btn" href="javascript:;"></a>
              </a>
                <ul class="sex-list">
                  ${genderHTML}
                </ul>
            </div>
            <span class="city">现居住地：</span>
            <div class="city-container">
              <a href="javascript:;" class="city-select provinceSelect" type="text" placeholder="省">
                <a class="province-btn" href="javascript:;"></a>
              </a>
                <ul class="city-list province">
                  ${provinceHTML}
                </ul>
            </div>
            <div class="city-container">
              <a href="javascript:;" class="city-select municipalitySelect" type="text" placeholder="市">
                <a class="city-btn" href="javascript:;"></a>
              </a>
                <ul class="city-list municipality">
                </ul>
            </div>
          </div>
          <div class="from-two clearfix">
            <p class="status">您当前的状态是：</p>
            <ul class="status-select">
              <li data-value ="1" class="status-item student" >学生</li>
              <li data-value ="2" class="status-item career">在职</li>
              <li data-value ="3" class="status-item unemployed">待业</li>
            </ul>
          </div>
          <div class="from-three">
            <div class="grade-container gradeList">
              <a href="javascript:;" class="grade-select gradeInput" type="text">
                <a class="grade-btn" id ="gradeBtn" href="javascript:;"></a>
              </a>
              <ul class="grade-list gradeSet">
                ${gradeHTML}
              </ul>
            </div>
            <div class="grade-container yearList">
              <a href="javascript:;" class="grade-select yearInput" type="text">
                <a class="grade-btn" id="yearBtn" href="javascript:;"></a>
              </a>
              <ul class="grade-list yearSet">
              </ul>
            </div>
            <div class="grade-container occupationList">
              <a href="javascript:;" class="grade-select occupationInput" type="text">
                <a class="grade-btn" id="occupationBtn" href="javascript:;"></a>
              </a>
              <ul class="grade-list occupationSet">
                ${occupationHTML}
              </ul>
            </div>
            <div class="grade-container workList">
              <a href="javascript:;" class="grade-select workInput" type="text">
              <a class="grade-btn" id="workBtn" href="javascript:;"></a>
              </a>
              <ul class="grade-list workSet">
                ${workHTML}
              </ul>
            </div>
          </div>
        </div>
        <div class="certificate-btn">
          <button class="btn-next" id="showSecTemplete">下一步</button>
        </div>
      </div>
    `
    return html;
  },
  removeMask:function(){
    $('.authentication-context').remove();
  },
  toggleClass:function(){
    $('.sex-list').toggleClass('active');
  },
  genderHTML:function(){
    var gender =Popup.data.gender;
    let genderH = gender.map((item)=>{
      return `<li value="${item}" class="sex-item" name ="${item}">${item}</li>` 
    }).join('');
    return genderH
  },
  sexSelect:function(e){
    $(this).toggleClass('active');
    var thisText = $(this).text();
    Popup.data.gender = thisText;
    //设置表单中的文本内容
    $('#sex-select').text(thisText);
    Popup.toggleClass();
  },
  provinceClass:function(){
    $('.province').toggleClass('active');
  },
  provinceHTML:function(){
    var province = data_area.child;
    let provinceH = province.map((data)=>{
      return `<li value="${data.id}" class="city-item" name="${data.name}">${data.name}</li>`
    }).join('')
    return provinceH
  },
  citySelect:function(e){
    $('.municipality').empty()
    var provinceText = $(this).text();
    Popup.data.omit = provinceText;
    $('.provinceSelect').text(provinceText);
    var province = data_area.child;
    let html ='';
    province.filter((value)=>{
      if(value.name == provinceText){
      var municipality = value.child; 
      municipality.filter((data)=>{
        let tmp = `<li value="${data.id}" class="municipality-item" name="${data.name}">${data.name}</li>`
        html += tmp;
        })
      $('.municipality').append(html);                                           
      } 
    })
    Popup.provinceClass();
    $('.municipalitySelect').text('市')
  },
  btnClass:function(){
    $('.municipality').toggleClass('active');
  },
  municipalityItem:function(e){
    var municipalityText = $(this).text();
    $('.municipalitySelect').text(municipalityText);
    Popup.btnClass();
  },
  StatusItem:function(){
    //console.log(this);
    var thisValue =$(this).data('value');
    Popup.data.careerStatus = thisValue;
    $('.status-item').removeClass('active');
    $(this).addClass('active'); 
    if(thisValue==1){
      $('.gradeList').show();
      $('.yearList').show();
      $('.occupationList').hide();
      $('.workList').hide();
      Popup.data.grade ='';
      Popup.data.year = '';
      $('.gradeInput').text('您所在的年级');
      $('.yearInput').text('入学年份');
      $('#showSecTemplete').removeClass('active');
     }else if(thisValue ==2){
      $('.occupationList').show();
      $('.workList').show();
      $('.gradeList').hide();
      $('.yearList').hide();
      Popup.data.occupation = '';
      Popup.data.workTime = '';
      $('.occupationInput').text('您所从事的职业');
      $('.workInput').text('5-10年');
      $('#showSecTemplete').removeClass('active');
     }else if(thisValue ==3){
      $('.occupationList').hide();
      $('.workList').hide();
      $('.gradeList').hide();
      $('.yearList').hide();
      $('#showSecTemplete').addClass('active');    
    }
  },
  gradeClass:function(){
    $('.gradeSet').toggleClass('active');
  },
  gradeHTML:function(){
    var gradeType = Popup.data.gradeType;
    //console.log(gradeType); 
    let gradeH = gradeType.map((item)=>{
      return `<li value="${item}" class="grade-item">${item}</li>`
    }).join('');
    return gradeH
  },
  gradeSelect:function(e){
    $(this).toggleClass('active');
    var thisText = $(this).text();
    Popup.data.gradeType = thisText;
    $('.gradeInput').text(thisText);
    Popup.gradeClass();
  },
  yearClass:function(){
    $('.yearSet').toggleClass('active');
    Popup.yearHtml();
  },
  yearHtml:function(){
    let schoolEnter = Popup.data.schoolEnter;
    let nowTime = new Date().getFullYear();
    //console.log(nowTime);
    let html ='';
    for(var i=nowTime;i>=1976;i--){
      var yearItem = `<li class ="year-item" value ="${i}">${i}</li> `
      html += yearItem;
      //console.log(i);//2018-1976
    }
    $('.yearSet').append(html);
  },
  yearSelect:function(e){
    $(this).toggleClass('active');
    var thisText = $(this).text();
    Popup.data.gradeType = thisText;
    $('.yearInput').text(thisText);
    Popup.yearClass();
  },
  occuptionClass:function(){
    $('.occupationSet').toggleClass('active');
  },
  occupationHTML:function(){
    var careerType = Popup.data.careerType;
    let careerTypeH = careerType.map((item)=>{
      return `<li value="${item}" class="occupation-item">${item}</li>`
    }).join('');
    return careerTypeH
  },
  occupationSelect:function(e){
    $(this).toggleClass('active');
    var thisText = $(this).text();
    Popup.data.careerType = thisText;
    $('.occupationInput').text(thisText);
    Popup.occuptionClass();
  },
  workClass:function(){
    $('.workSet').toggleClass('active');
  },
  workHTML:function(){
    var workExperience = Popup.data.workExperience;
    let workExperienceH = workExperience.map((item)=>{
      return `<li value="${item}" class="work-item">${item}</li> ` 
    }).join('');
    return workExperienceH
  },
  workSelect:function(){
    $(this).toggleClass('active')
    var thisText = $(this).text();
    Popup.data.workExperience = thisText;
    $('.workInput').val(thisText);
    Popup.workClass();
  },
  showSecondMask:function(){
    let html = `
    <div class="certificate-member">
      <span class="number">第<span class="number-step">2</span>步/共3步</span>
      <h2 class="certificate-title">成为认证学员
        <img src="img/nember.png">
      </h2>
      <p class="certificate-desc">成为极客学院认证学员，点亮专属身份标识，
        <span>免费观看</span>全站80%以上会员课程</p>
    </div>
    <div class="direction-message">
      <div class="certificate-direction">
        <p class="direction-title">选择你感兴趣的职业方向（最多可选择三项）
          <span>系统将根据你的选择为您提供合适的课程</span>
        </p>
        <ul class="course-list">
        </ul>
      </div>
      <div class="direction-btn">
        <button class="btn-pre" id ="showPreTemplete">上一步</button>
        <button class="btn-next" id="showThreeTemplete">下一步</button>
      </div>
    </div>
    `
    $('.certificate').html(html);
    Popup.courseHTML();
  },
  courseHTML:function(){
    let html = '';
    let picIcon = Popup.data.picIcon;
    let directionType = Popup.data.directionType;
    let directionH = directionType.filter((item)=>{
    let tmp =`<li class="course-item" name =${item}>${item}
                </li>  ` 
        html+= tmp
    }).join(''); 
    $('.course-list').append(html);
  },
  showPreMask:function(){
    Popup.memberHTML();
    console.log(Popup.memberHTML());
  },
  directionSelect:function(){ 
    let arrDirection = Popup.data.arrDirection;
    // 没选中
    if (!($(this).hasClass('active'))) {
      $(this).addClass('active');
      arrDirection.push(this);
      if (arrDirection.length > 3) {
        $(arrDirection[0]).removeClass('active')
        arrDirection.shift();
      }
    }else{
     // 选中
      arrDirection.shift();
        $(this).removeClass('active');
    }
    if (arrDirection.length == 3) {
      $('#showThreeTemplete').addClass('active');
    }
  },
  showThreeTemplete:function(){
    let html =`
      <div class="certificate-member">
        <span class="number">第<span class="number-step">3</span>步/共3步</span>
        <h2 class="certificate-title">成为认证学员
          <img src="img/nember.png">
        </h2>
        <p class="certificate-desc">成为极客学院认证学员，点亮专属身份标识，
          <span>免费观看</span>全站80%以上会员课程</p>
      </div>
      <div class="certificate-message">
        <div class="certificate-level">
          <p class="level-title">你在方向上当前的水平如何?
            <span>系统将根据你的选择推荐适合您的课程</span>
          </p>
        <div class ="level-container">
        </div>
        <div class="level-btn">
          <button class="btn-pre" id ="showFrouPre">上一步</button>
          <button class="btn-next" id="showForeNext">申请认证</button>
        </div>
      </div>
    `
    $('.certificate').html(html);
    let levelHTML = Popup.levelHTML();
  },
  showFrouPre:function(){
    Popup.showSecondMask();
  },
  levelHTML:function(){
    let levelType = Popup.data.levelType;
    let html='';
    levelType.filter((item)=>{
    let levelType =  `<div class="level-desc clearfix">
                        <span value="${item.item_id}" class="list-title">${item.name}</span>
                        <ul class="level-list">
                        </ul>
                        <ul class="level-line">
                        </ul>
                      </div>`
    html += levelType;
    }).join('');
    $('.level-container').append(html);
    let levelLine = Popup.data.levelLine;
    levelData = Popup.data.levelData;
    Popup.levelDataHTML();
    Popup.levelLineHTML();
  },
  levelDataHTML:function(){
    let html='';
    levelData = Popup.data.levelData;
    levelData.filter((data)=>{
      let levelDataH = `<li data-id="${data.level_id}" class="level-item">${data.name}</li> ` 
      html += levelDataH;
    }).join('');
    //console.log(html);
    $('.level-list').append(html);
  },
  levelLineHTML:function(){
    let html = '';
    levelLine =Popup.data.levelLine;
    levelLine.filter((item)=>{
      let levelLineH = `<li data-value="${item}" class="line-item"></li> `
    html += levelLineH
    }).join();
    $('.level-line').append(html);
  },
  levelItemSelect:function(){
    let parentNodeone = this.parentNode;//ul的子集合
    // console.log(parentNodeone);
    let listItem = $(parentNodeone).children();//li数组
    //console.log(listItem);
    let nexList = $(parentNodeone).next();//当前节点的下一个兄弟节点
    // console.log(nexList);
    let lineItem = $(nexList).children();//当前节点的下一个兄弟节点的集合
    // console.log(lineItem);
    for(var i=listItem.length - 1;i>=0;i--){
      $(listItem[i]).removeClass('active');
    }
    for(var i=lineItem.length - 1;i>=0;i--){
      $(lineItem[i]).removeClass('active');
      $(lineItem[i]).prevAll().addClass('active');
      //console.log(lineItem);
    }
    $(this).addClass('active');
    for(var i=listItem.length - 1;i>=0;i--){
      if(this == listItem[i]){
        $(lineItem[i]).addClass('active');
        $(lineItem[i]).prevAll().addClass('active');
      }
    }
    let levelLine = Popup.data.levelLine;
    for(var i= levelLine.length -1; i>=0;i--){
      if(this.parentNodeone == levelLine[i].parentNode){
        levelLine.splice(i,1);
      }
    }
    levelLine.push(this);
    if(levelLine.length >= 3){
      $('#showForeNext').addClass('active');
    }else{
      $('#showForeNext').removeClass('active');
    }
  },
  showForeNext:function(){
    let html = `
      <div class="certificate-member">
        <h2 class="certificate-title">绑定手机  完成验证
          <img src="img/icon.png">
        </h2>
        <p class="certificate-desc">请您绑定手机防止账号丢失和被盗，手机号可用于登录和找回密码。
        </p>
      </div>
      <div class="certificate-message">
        <div class="certificate-binding">
          <div class = "phone-input">
            <input class="binding-phone" type="text" placeholder="请输入手机号">
            <span class="noempty-num"></span>
          </div>
          <div class="binding-desc">
            <input class="binding-proving" type="text" placeholder="验证码">
            <span class="proving-num"></span>
            <span class="get-proving"><img src="img/proving.png"></span>
          </div>
          <div class="code-btn">
            <input class="binding-num" type="text" placeholder="动态码">
            <a class="dynamic-code" href="javascript:;">获取动态码</a>
          </div>
        </div>
        <div class="certificate-btn">
          <button class="certificate-next">申请认证</button>
        </div>
      </div>
    `
    $('.certificate').html(html);
    $('.certificate').css('width','100%');
  },
  dynamicCodeSend:function(){
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    var phone = $('.binding-phone');
    var flag = myreg.test(phone);
    var myregTwo = /^\d{4}$/;
    var code = $('.binding-proving').val();
    var flagTwo = myregTwo.test(code);
    if($('.binding-phone').val()==""){
      $('.noempty-num').text('不能为空');
    }else{
      if(flag){
        $('.noempty-num').text('');
      }else{
        $('.noempty-num').text('输入错误');
      }
    };
    if($('.binding-proving').val()==""){
      $('.proving-num').text('不能为空');
    }else{
      if(flagTwo){
        $('.proving-num').text('');
      }else{
      $('.proving-num').text('输入错误');
      }
    };
    if(flag&&flagTwo){
      Popup.countDown();
    };
  },
  countDown:function(){
    let count = 60;
      var st = setInterval(()=>{
        if (count > 1) {
          count --;
          let dynamicCodeSendCount =  '已发送'+'' + '(' + count + ')';
          $('.dynamic-code').text(dynamicCodeSendCount);
          $('.dynamic-code').attr('disabled', true);
        }else{
          clearInterval(st);
          $('.dynamic-code').text('获取');
          $('.dynamic-code').attr('disabled', false);
        }
      },1000);
  },
  inputCode:function(e){
    if($(this).val()!==""){
      $('.certificate-next').addClass('active');
    }else('.certificate-next').removeClass('active');
  },
  showFiveNext:function(){
    let html = `
      <div class="certificate-success">
        <div class="user-pic">
          <img class="user-photo" src="img/head.png">
          <img class="user-icno" src="img/nember.png">
        </div>
        <p class="success-name">jikeRain</p>
        <h4 class="success-title">恭喜，完成验证！</h4>
        <p class="success-watch">现在你可以免费观看 80% 以上会员课程</p>
        <p class="success-studing">
          <a href="javascript:;">马上去学习>></a>
        </p>
      </div>
      <div class="certificate-recommend">
        <p class="recommend-title">为你推荐如下课程</p>
        <div class="recommend-academy">
          <p class="academy-title">职业学院</p>
          <ul class="academy-list">
            <li class="academy-item">
              <img class="headp" src="img/headp.png">
              <span class="academy-web">
                <p class="academy-desc">Python Web 工程师成长计划</p>
                <p class="academy-num">2314人正在学习</p>
              </span>
            </li>
          </ul>
          <ul class="academy-list">
            <li class="academy-item">
              <img class="headp" src="img/headp.png">
              <span class="academy-web">
                <p class="academy-desc">Python Web 工程师成长计划</p>
                <p class="academy-num">2314人正在学习</p>
              </span>
            </li>
          </ul>
        </div>
        <div class="recommend-member">
          <p class="member-course">会员课程</p>
          <ul class="member-list">
            <li class="member-item">· Tornado 开发--TCP 编程</li>
            <li class="member-item">· Python 类深入</li>
          </ul>
           <ul class="member-list">
            <li class="member-item">· 开发远程控制程序高级功能</li>
            <li class="member-item">· Python 类初步</li>
          </ul>
           <ul class="member-list">
            <li class="member-item">· 网页控制电脑</li>
            <li class="member-item">· Python 初级项目：远程操控电脑</li>
          </ul>
        </div>
      </div>
    `
    $('.certificate').html(html);
    $('.certificate').css('width','100%');
  },

}
Popup.init();