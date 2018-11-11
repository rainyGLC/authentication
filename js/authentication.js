const identification = {
  data:{
    uname:"Ryan",//姓名
    pic:"./img/head.png",//头像
    genderSex:'女',
    gender:['保密','男','女'],//性别
    prove_id:2,//省
    city_id:36,//市
    careerStatus:2,//职业状态，1学生 2在职 3待业
    career_type:'技术', //职业类型,学生:初中、高中、大学;在职:产品、前端、后端;
    schoolEnter:null, //入学年份
    gradeType:['高中及以下','专科','大学本科','研究生及以上'],//所在年级 
    careerType:[
    {id:1,name:'技术'},
    {id:2,name:'产品'},
    {id:3,name:'设计'},
    {id:4,name:'测试'},
    {id:5,name:'运营'},
    {id:6,name:'其他'}],//在职：产品 前端 后端；
    workExperience:1,//工作年限id
    workExperienceData:[
    {id: 1,name: '1年以下'},
    {id: 2,name: '1-2年'},
    {id: 3,name: '3-5年'},
    {id: 4,name: '6-10年'},
    {id: 5,name: '10年以上'}],//工作年限制数据
    arrDirection:[],//职业方向选择
    career_intere:['120-1','119-2'],//职业方向和水平
    directionType:[
    {item_id:114,name:'Web前端工程师'},
    {item_id:115,name:'Ios 开发工程师'},
    {item_id:116,name:'PHP工程师'},
    {item_id:117,name:'Java Web工程师'},
    {item_id:118,name:'Go 语言工程师'},
    {item_id:119,name:'Andriod 开发工程师'},
    {item_id:120,name:'python Web工程师'}]
  },
  init:function(){
    this.bind()
  },
  bind:function(){
    //弹出窗口
    $('.popup').on('click',this.showMask);
    //关闭窗口
    $('body').on('click','.container-close',this.removeMask);
    //性别下拉收起
    $('body').on('click','.sex-btn',this.toggleClass)
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
    $('body').on('click','.status-item',this.StatusItem);
    //年级列表下拉收起
    $('body').on('click','#gradeBtn',this.gradeClass);
    //点击年级项插入到input输入框
    $('body').on('click','.grade-item',this.gradeSelect);
    //年份列表下拉收起
    $('body').on('click','#yearBtn',this.yearClass)
    //点击年份项插入到input 输入框中
    $('body').on('click','.year-item',this.yearSelect);
    //点击职业列表下拉
    $('body').on('click','#occupationBtn',this.occuptionClass);
    //点击职位项插入到input中
    $('body').on('click','.occupation-item',this.occupationSelect);
    //点击年限列表下拉
    $('body').on('click','#workBtn',this.workClass);
    //点击年限项插入到input中
    $('body').on('click','.work-item',this.workSelect);
    //点击按钮到下一页
    $('body').on('click','#showSecTemplete.active',this.showSecondMask);
    //点击上一页按钮
    $('body').on('click','#showPreTemplete',this.showPreMask);
    //点击"course-item"项最多可选三个
    $('body').on('click','.course-item',this.directionSelect);
    //点击下一页按钮
    $('body').on('click','.btn-next-direction.active',this.showThreeTemplete);
    //点击上一页按钮
    $('body').on('click','#showFrouPre',this.showFrouPre);
    //点击选择职业方向
    $('body').on('click','.level-item',this.levelItemSelect);
    //点击按钮跳转到下一页
    $('body').on('click','#showForeNext.active',this.showForeNext);
    //点击获取按钮判断是否输入手机号码和验证码
    $('body').on('click','.dynamic-code',this.dynamicCodeSend);
    //输入动态码
    $('body').on('input','.binding-num',this.inputCode)
    //下一页
    $('body').on('click','.certificate-next.active',this.showFiveNext)
    // 验证码刷新
    $('body').on('click','#verifyImage',this.reflashVerifyImage)
  },
  showMask:function(){
    let html = `
      <div class="authentication-context">
        <div class="authentication-mask"></div>
        <div class="authentication-container"> 
        </div>
      </div>`;
      $('body').append(html);
      identification.showMaskoneHtml();
  },
  showMaskoneHtml:function(){
    let genderHTML = identification.genderHTML();
    let provinceHTML = identification.provinceHTML();
    let gradeHTML = identification.gradeHTML();
    let yearHtml = identification.yearHtml();
    let occupationHTML = identification.occupationHTML();
    let workHTML = identification.workHTML();
    let uname = identification.data.uname;
    let pic =identification.data.pic;
    let genderSex = identification.data.genderSex;
    let gender = identification.data.gender;
    let prove_id = identification.data.prove_id;
    let city_id = identification.data.city_id;
    let proviceText = '省';
    let cityText ='市';
    let gradeText = "您所在的年级";
    let schoolEnterText = "入学年份";
    let careerText = "您所从事的职业";
    let workExperienceText = "工作年限"
    let dataIndex =null;
    data_area.child.forEach((p_data,index)=>{
      let p_id = p_data.id;
      let p_name = p_data.name;
      if(prove_id == p_id){
        proviceText = p_name;
        dataIndex = index
      } 
    });
    data_area.child[dataIndex].child.forEach((c_data)=>{
      let c_id = c_data.id;
      let c_name = c_data.name;
      if(city_id == c_id){
        cityText =c_name;
      }
    });
    let careerStatus =identification.data.careerStatus;
    let career_type = identification.data.career_type;
    let gradeType = identification.data.gradeType;
    let schoolEnter  = identification.data.schoolEnter;
    let careerType = identification.data.careerType;
    let workExperience = identification.data.workExperience;
    if(career_type !== null && workExperience !== null){
      careerText = career_type;
    }
    if(workExperience){
      let workExperience_data = identification.data.workExperienceData.filter( data => data.id == workExperience)[0]
      workExperienceText = workExperience_data.name;
    }
    let html = `
      <div class="certificate-container-one">
        <div class="container-close"></div>
        <div class="certificate-one">
          <div class="certificate-member-one">
            <span class="number">第<span class="number-step">1</span>步/共3步</span>
            <h2 class="certificate-title">成为认证学员
              <img src="img/nember.png">
            </h2>
            <p class="certificate-desc">成为极客学院认证学员，点亮专属身份标识，
              <span>免费观看</span>全站80%以上会员课程</p>
          </div>
          <div class="certificate-message-one">
            <div class="certificate-avator">
              <img src="${pic}">
              <p class="nember-name">${uname}</p>
            </div>
            <div class="certificate-from">
              <div class="from-one clearfix">
                <span class="sex">性别：</span>
                <div class="sex-container">
                  <a href="javascript:;" id="sex-select" type="text" name = "sex">
                    ${genderSex}
                    <a class="sex-btn" href="javascript:;"></a>
                  </a>
                    <ul class="sex-list">
                     ${genderHTML}
                    </ul>
                </div>
                <span class="city">现居住地：</span>
                <div class="city-container">
                  <a href="javascript:;" class="city-select provinceSelect" type="text">
                    ${proviceText}
                    <a class="province-btn" href="javascript:;"></a>
                  </a>
                    <ul class="city-list province">
                      ${provinceHTML}
                    </ul>
              </div>
              <div class="city-container">
                <a href="javascript:;" class="city-select municipalitySelect" type="text">
                  ${cityText}
                  <a class="city-btn" href="javascript:;"></a>
                </a>
                  <ul class="city-list municipality">
                  </ul>
              </div>
            </div>
            <div class="from-two clearfix">
              <p class="status">您当前的状态是：</p>
              <ul class="status-select">
                <li data-value="1" class="status-item  ${careerStatus == 1 ? 'active' : ''}" student>学生</li>
                <li data-value ="2" class="status-item ${careerStatus == 2 ? 'active' : ''}" career">在职</li>
                <li data-value ="3" class="status-item ${careerStatus == 3 ? 'active' : ''}" unemployed">待业</li>
              </ul>
            </div>
            <div class="from-three">
              <div class="grade-container gradeList" style="display:${careerStatus == 1 ? 'block' : 'none'}">
                <a href="javascript:;" class="grade-select gradeInput" type="text" >
                  ${careerStatus == 1 && career_type !== null ? career_type : '你所在的班级'}
                  <a class="grade-btn" id ="gradeBtn" href="javascript:;"></a>
                </a>
                <ul class="grade-list gradeSet">
                  ${gradeHTML}
                </ul>
              </div>
              <div class="grade-container yearList" style="display:${careerStatus == 1 ? 'block' : 'none'}">
                <a href="javascript:;" class="grade-select yearInput" type="text">
                  ${careerStatus == 1 && schoolEnter !== null ? schoolEnter : '入学年份'}
                  <a class="grade-btn" id="yearBtn" href="javascript:;"></a>
                </a>
                <ul class="grade-list yearSet">
                  ${yearHtml}
                </ul>
              </div>
              <div class="grade-container occupationList" style="display:${careerStatus == 2 ? 'block' : 'none'}">
                <a href="javascript:;" class="grade-select occupationInput" type="text">
                  ${careerStatus == 2 && career_type !== null ? career_type : '你所从事的职业'}
                  <a class="grade-btn" id="occupationBtn" href="javascript:;"></a>
                </a>
                <ul class="grade-list occupationSet">
                  ${occupationHTML}
                </ul>
              </div>
              <div class="grade-container workList" style="display:${careerStatus == 2 ? 'block' : 'none'}">
                <a href="javascript:;" class="grade-select workInput" type="text">
                  ${careerStatus == 2 && workExperience !== null ? workExperienceText : '工作年限'}
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
      </div> 
      `
    $('.authentication-container').append(html);
    identification.heightLightBtn();
  },
  toggleClass:function(){
    $('.sex-list').toggleClass('active');
  },
  genderHTML:function(){
    let gender = identification.data.gender;
    let genderH = gender.map((item)=>{
      return `<li value="${item}" class="sex-item" name ="${item}">${item}</li>` 
    }).join('');
    return genderH
  },
  sexSelect:function(e){
    $(this).toggleClass('active');
    var thisText = $(this).text();
    identification.data.genderSex = thisText;
    //设置表单中的文本内容
    $('#sex-select').text(thisText);
    identification.toggleClass();
    identification.heightLightBtn();
  },
  provinceClass:function(){
    $('.province').toggleClass('active');
  },
  provinceHTML:function(){
    let provinceH = data_area.child.map((data)=>{
      return `<li data-value="${data.id}" class="city-item" name="${data.name}">${data.name}</li>`
    }).join('')
    return provinceH
  },
  citySelect:function(e){
    $('.municipality').empty()
    var thisValue = $(this).data('value');
    var provinceText = $(this).text();
    identification.data.prove_id = thisValue;
    $('.provinceSelect').text(provinceText);
    var province = data_area.child;
    let html ='';
    province.filter((value)=>{
      if(value.name == provinceText){
      var municipality = value.child; 
      municipality.filter((data)=>{
        let tmp = `<li data-value="${data.id}" class="municipality-item" name="${data.name}">${data.name}</li>`
        html += tmp;
        })
      $('.municipality').append(html);                                           
      } 
    })
    identification.provinceClass();
    $('.municipalitySelect').text('市')
    identification.city_id = '';
    identification.btnClass();
    identification.heightLightBtn();
  },
  btnClass:function(){
    $('.municipality').toggleClass('active');
  },
  municipalityItem:function(e){
    var thisValue = $(this).data('value');
    var municipalityText = $(this).text();
    identification.data.city_id =thisValue;
    $('.municipalitySelect').text(municipalityText);
    identification.btnClass();
    identification.heightLightBtn();
  },
  StatusItem:function(){
    var thisValue =$(this).data('value');
    identification.data.careerStatus = thisValue;
    $('.status-item').removeClass('active');
    $(this).addClass('active'); 
    if(thisValue==1){
      $('.gradeList').show();
      $('.yearList').show();
      $('.occupationList').hide();
      $('.workList').hide();
      identification.data.career_type = null;
      identification.data.workExperience = null;
      $('.occupationInput').text('您所从事的职业');
      $('.workInput').text('工作年限');      
     }else if(thisValue ==2){
      $('.occupationList').show();
      $('.workList').show();
      $('.gradeList').hide();
      $('.yearList').hide();
      identification.data.career_type =null;
      identification.data.schoolEnter = null;
      $('.gradeInput').text('您所在的年级');
      $('.yearInput').text('入学年份');
     }else if(thisValue ==3){
      $('.occupationList').hide();
      $('.workList').hide();
      $('.gradeList').hide();
      $('.yearList').hide();
      identification.data.career_type =null;
      identification.data.workExperience =null;
      identification.data.schoolEnter = null;   
    }
    identification.heightLightBtn();
  },
  gradeClass:function(){
    $('.gradeSet').toggleClass('active');
  },
  gradeHTML:function(){
    var gradeType = identification.data.gradeType; 
    let gradeH = gradeType.map((item)=>{
      return `<li value="${item}" class="grade-item">${item}</li>`
    }).join('');
    return gradeH
  },
  gradeSelect:function(e){
    $(this).toggleClass('active');
    var thisText = $(this).text();
    identification.data.career_type = thisText;
    $('.gradeInput').text(thisText);
    identification.gradeClass();
    identification.heightLightBtn();
  },
  yearClass:function(){
    $('.yearSet').toggleClass('active');
  },
  yearHtml:function(){
    let nowTime = new Date().getFullYear();
    let html ='';
    for(var i=nowTime;i>=1976;i--){
      var yearItem = `<li class ="year-item" value ="${i}">${i}</li> `
      html += yearItem;
    }
    return html;
  },
  yearSelect:function(e){
    $(this).toggleClass('active');
    var thisText = $(this).text();
    identification.data.schoolEnter = thisText;
    $('.yearInput').text(thisText);
    identification.yearClass();
    identification.heightLightBtn();
  },
  occuptionClass:function(){
    $('.occupationSet').toggleClass('active');
  },
  occupationHTML:function(){
    var careerType = identification.data.careerType;
    let careerTypeH = careerType.map((item)=>{
      return `<li data-value="${item.id}" class="occupation-item">${item.name}</li>`
    }).join('');
    return careerTypeH
  },
  occupationSelect:function(e){
    $(this).toggleClass('active');
    var thisText = $(this).text();
    var value = $(this).data('value');
    if(identification.data.careerStatus == 2){
      identification.data.career_type = thisText;
    }else{
      identification.data.career_type = null;
    }
    $('.occupationInput').text(thisText);
    identification.occuptionClass();
    identification.heightLightBtn();
  },
   workClass:function(){
    $('.workSet').toggleClass('active');
  },
  workHTML:function(){
    var workExperienceData = identification.data.workExperienceData;
    let workExperienceH = workExperienceData.map((item)=>{
      return `<li data-value="${item.id}" class="work-item">${item.name}</li> ` 
    }).join('');
    return workExperienceH
  },
  workSelect:function(){
    $(this).toggleClass('active');
    var thisValue = $(this).data('value');
    var thisText = $(this).text();
    identification.data.workExperience = thisValue;
    $('.workInput').text(thisText);
    identification.workClass();
    identification.heightLightBtn();
  },
  removeMask:function(){
    $('.authentication-context').remove();
  },
  heightLightBtn:function(){
    //性别
    let hasSex = !(identification.data.genderSex == null);
    //省
    let hasProve = !(identification.data.prove_id == null);
    //市
    let hasCity = !(identification.data.city_id == null);
    //职业类型
    let hasCareerType = !(identification.data.career_type == null);
    //入学年份
    let hasSchoolEnter = !(identification.data.schoolEnter == null);
    //工作年限
    let hasworkExperience = !(identification.data.workExperience == null);
    // 性别 省 市 职业 入学年份
    if(hasSex && hasProve && hasCity && hasCareerType && hasSchoolEnter){
      $('#showSecTemplete').addClass('active');
       // 性别 省 市 职业 工作年限
    }else if(hasSex && hasProve && hasCity && hasCareerType && hasworkExperience){
      $('#showSecTemplete').addClass('active');
    // 性别 省 市 职业 
    }else if(hasSex && hasProve && hasCity && identification.data.careerStatus ==3){
      $('#showSecTemplete').addClass('active');
    }else{
      $('#showSecTemplete').removeClass('active');
    }
  },
  showSecondMask:function(){
    let arrDirection = identification.data.career_intere.map(data => Number(data.split('-')[0]));
    //console.log(arrDirection);
    let html =  `
      <div class="certificate-container-three">
        <div class="container-close"></div>
        <div class="certificate">
          <div class="certificate-member-three">
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
              <button class="btn-next-direction" id="showThreeTemplete">下一步</button>
            </div>
          </div>
        </div>
      </div> 
      `
    $('.authentication-container').html(html);
    identification.courseHTML();
  },
  courseHTML:function(){
    let arrDirection = identification.data.career_intere.map((data)=>{
      let id = Number(data.split('-')[0])
      return id;
    });
    identification.data.arrDirection = arrDirection;
    let directionType = identification.data.directionType;
    let html = directionType.map((data,index)=>{
      if(arrDirection.includes(data.item_id)){
        tmp= `<li data-value =${data.item_id} class= "course-item active" name =${data.name}>${data.name}</li>`
      }else{
        tmp= `<li data-value = ${data.item_id} class= "course-item" name =${data.name}>${data.name}</li>`
      }
      return tmp
    }).join('');
    $('.course-list').append(html);
    if(arrDirection.length > 0){
      $('.btn-next-direction').addClass('active');
    }else{
      $('.btn-next-direction').removeClass('active');
    }
  },
  //职业方向选择
  directionSelect:function(){
    var careerIntereValue = $(this).data('value');
    var strcareerIntereValue = careerIntereValue + '-'+ 0;
    var arrDirection = identification.data.career_intere;
    var tmpIndex = null;
    var hasLightHight = false;
    arrDirection.forEach((data,index)=>{
      let typeId = data.split('-')[0];
      if(typeId == careerIntereValue){
        tmpIndex = index;
        hasLightHight = true
      }
    })
    if(hasLightHight){
      arrDirection.splice(tmpIndex,1);
      $(this).removeClass('active')
    }else if(arrDirection.length <3){
      arrDirection.push(strcareerIntereValue);
      $(this).addClass('active');
    }
    if(arrDirection.length == 0){
      $('.btn-next-direction').removeClass('active');
    }else{
      $('.btn-next-direction').addClass('active');
    }
  },
  showPreMask:function(){
    identification.showMaskoneHtml();
    $('.certificate-container-two').css('display','none');
    $('.certificate-container-three').css('display','none');
  },
  showThreeTemplete:function(){
    var levelHTML = identification.levelHTML();
    let html =`
      <div class="certificate-container-three">
        <div class="container-close"></div>
        <div class="certificate-three">
        <div class="certificate-member-three">
          <span class="number">第<span class="number-step">3</span>步/共3步</span>
          <h2 class="certificate-title">成为认证学员
            <img src="img/nember.png">
          </h2>
          <p class="certificate-desc">成为极客学院认证学员，点亮专属身份标识，
            <span>免费观看</span>全站80%以上会员课程</p>
        </div>
        <div class="certificate-message-three">
          <div class="certificate-level">
            <p class="level-title">你在方向上当前的水平如何?
              <span>系统将根据你的选择推荐适合您的课程</span>
            </p>
            <div class ="level-container">
              ${levelHTML}
            </div>
            <div class="level-btn">
              <button class="btn-pre" id ="showFrouPre">上一步</button>
              <button class="btn-next" id="showForeNext">申请认证</button>
            </div>
          </div>
        </div>
      </div>     
    `
    $('.authentication-container').html(html);
    identification.showLevelBtn();
  },
  levelHTML:function(){
    let directionType = identification.data.directionType;
    let career_intere = identification.data.career_intere;
    let html = '';
    directionType.forEach(data =>{ 
      career_intere.forEach((item,index)=>{
        let typeId = item.split('-')[0];
        let level_id = item.split('-')[1];
        if(data.item_id == typeId){
          let levelType = `
          <div class="level-desc clearfix">
            <span value="${data.item_id}" class="list-title">${data.name}</span>
            <ul class="level-list">
              <li class="level-item ${level_id == 1 ? 'active' : ''}" data-parent_index="${index}" data-value="${data.item_id}-1" data-id ="${data.item_id}">完全不了解</li>
              <li class="level-item ${level_id == 2 ? 'active' : ''}" data-parent_index="${index}" data-value="${data.item_id}-2" data-id ="${data.item_id}">有点了解</li>
              <li class="level-item ${level_id == 3 ? 'active' : ''}" data-parent_index="${index}" data-value="${data.item_id}-3" data-id ="${data.item_id}">熟悉</li>
              <li class="level-item ${level_id == 4 ? 'active' : ''}" data-parent_index="${index}" data-value="${data.item_id}-4" data-id ="${data.item_id}">精通</li>
            </ul>
            <ul class="level-line">
              <li class="line-1 line-item ${level_id <= 4 ? 'active':''}"></li>
              <li class="line-2 line-item ${level_id ==2 || level_id ==3 || level_id == 4 ? 'active':''}"></li>
              <li class="line-3 line-item ${level_id ==3 || level_id ==4 ? 'active':''}"></li>
              <li class="line-4 line-item ${level_id == 4 ? 'active':''}"></li>
            </ul>
          </div>`
        html += levelType;
        }
      })
    });
    return html;
  },
  showFrouPre:function(){
    identification.showSecondMask();
  },
  //水平选择
  levelItemSelect:function(){
    let parentNodeone = this.parentNode;//ul的子集合
    let listItem = $(parentNodeone).children();//li数组
    let nexList = $(parentNodeone).next();//当前节点的下一个兄弟节点
    let lineItem = $(nexList).children();//当前节点的下一个兄弟节点的集合
    let index = $(this).index();
    listItem.removeClass('active');
    lineItem.removeClass('active');
    $(this).addClass('active');
    var bottomLineIndexElement = `li:lt(${index + 1})`
    nexList.children(bottomLineIndexElement).addClass('active');
    let value = $(this).data('value');
    let parentIndex = $(this).data('parent_index');
    // 实现数组重组
    identification.data.career_intere[parentIndex] = value
    //console.log(identification.data.career_intere[parentIndex]);117-4
    identification.showLevelBtn();
  },
  showLevelBtn:function(){
    let career_intere = identification.data.career_intere;
    let active = career_intere.every( data => data.split('-')[1] != 0 );
    if(active){
      $('#showForeNext').addClass('active');
    }
  },
  showForeNext:function(){
    let setImgCode = identification.setImgCode();
    let html = `
      <div class="certificate-member">
        <h2 class="certificate-title">绑定手机  完成验证
          <img src="img/icon.png">
        </h2>
        <p class="certificate-desc">请您绑定手机防止账号丢失和被盗，手机号可用于登录和找回密码。
        </p>
      </div>
      <div class="certificate-message-four">
        <div class="certificate-binding">
          <div class = "phone-input">
            <input class="binding-phone" type="text" placeholder="请输入手机号">
            <span class="noempty-num"></span>
          </div>
          <div class="binding-desc">
            <input class="binding-proving" type="text" placeholder="验证码">
            <span class="proving-num"></span>
            <span class="get-proving"><img id="verifyImage" src="${setImgCode}"></span>
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
    $('.certificate-three').html(html);
  },
  setImgCode:function(){
    let getImgCodeUrl = 'http://huodong.jikexueyuan.com/jike1024/verifyCode';
    var imgCode = getImgCodeUrl +'?' + new Date().getTime();
    return imgCode;
  },
  //图片验证刷新
  reflashVerifyImage: function(){
    let url = identification.setImgCode();
    $(this).attr('src',url);
  },
  dynamicCodeSend:function(){
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    var phone = $('.binding-phone').val();
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
      identification.countDown();
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
        <p class="success-name">${identification.data.uname}</p>
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
    $('.certificate-three').html(html);
  },
}
identification.init();
