<template>
    <div class="reg-content">
        <header id="header" class="header">
            <div class="header-left">
                <a href="javascript:history.back(-1)" class="sb-back"></a>
            </div>
            <div class="header-middle">手机快速注册</div>
            <div class="header-right">
                <a href="/login.html" class="text">登录</a>
            </div>
        </header>
        <form id="MobileRegisterModel" class="form-horizontal" name="MobileRegisterModel" action="/register.html" method="post" novalidate="novalidate">
            <input type="hidden" name="_csrf" value="hf985HMr6wIdNK3mLClKrkbulWViUGV_O0VYABmMpTrCnhCLHVubeGlt29J5Sjn2NbjPESEUDSwPIRpKesTPfQ=="><!-- 第一步 -->
            <div class="middle-content hide" id="step_1" style="display: block;">
	            <span class="tip-text m-l-3">手机号即为登录账号，我们将发送验证短信到该号码</span>
	            <div class="form-group-box">
		            <div class="form-group form-group-spe">
                        <dl>
                            <dt>
                                <span>手机号：</span>
                            </dt>
                            <dd>
                                <div class="form-control-box">
		                            <input type="number" id="mobileregistermodel-mobile" class="form-control" name="MobileRegisterModel[mobile]" autofocus="autofocus" placeholder="请输入手机号码" pattern="[0-9]*">
                                </div>
                            </dd>
                        </dl>
                    </div>
                    <div class="invalid"></div>	
                </div>
                <div class="agree-deal">
                <!--协议选中状态 checked-->
                    <input type="checkbox" value="0" name="remember" id="remember1" class="agree-checkbox checked" checked="checked">
                    <span>
                        我已阅读并同意
                        <a href="javascript:void(0);" class="user_protocol">《用户注册协议》</a>
                    </span>
                </div>
                <div class="submit-btn">
                <!-- class添加disable样式 判断按钮是否可点击 -->
                    <a class="btn-submit disable" id="step_btn_1" href="javascript:void(0)">下一步</a>
                </div>
            </div>
        </form>
    </div>
</template>
