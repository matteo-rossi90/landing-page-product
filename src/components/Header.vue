<script>
export default {
    name:'Header',
    props: {
    activeSection: {
      type: String,
      required: true,
    },
}
}
</script>

<template>
    <header id="navbar-box">
        
        
                <div class="container-fluid">
        
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="d-flex align-items-center">
                            <div id="logo">
                                <img src="../../public/img/logo.png" alt="">
                            </div>
                        </div>
                        <div class="d-flex">
                            <nav id="menu">
                                <ul class="d-flex gap-4">
                                    <li>
                                        <RouterLink to="#home"
                                        :class="{ anchor: activeSection === 'home' }">Home</RouterLink></li>
                                    <li><RouterLink to="#advantages"
                                        :class="{ anchor: activeSection === 'advantages' }">Punti di forza</RouterLink></li>
                                    <li><RouterLink to="#reviews"
                                        :class="{ anchor: activeSection === 'reviews' }">Recensioni</RouterLink></li>
                                    <li><RouterLink to="#products"
                                        :class="{ anchor: activeSection === 'products' }">Paperelle</RouterLink></li>
                                    <li><RouterLink to="#questions"
                                        :class="{ anchor: activeSection === 'questions' }">FAQs</RouterLink></li>
                                    <li><RouterLink to="#newsletter"
                                        :class="{ anchor: activeSection === 'newsletter' }">Newsletter</RouterLink></li>   
                                </ul>
                            </nav>
        
                            <button type="button" data-bs-toggle="offcanvas" data-bs-target="#demo" id="btn-menu">
                                
                                <img src="../../public/img/icon/svg_icons/navbar-icon.svg" alt="">
                                
                            </button>
                            <div class="offcanvas offcanvas-end offcanvas-lg" id="demo">
                                <div class="offcanvas-header">
                                    <h1 class="offcanvas-title">Heading</h1>
                                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
                                </div>
                                <div class="offcanvas-body">
                                    <p>Some text lorem ipsum.</p>
                                    <p>Some text lorem ipsum.</p>
                                </div>
                            </div>
                        </div>
        
                    </div>
        
                </div>
        
            </header>

</template>

<style lang="scss" scoped>

@use './style/variables' as *;

header{
    font-family: $h-font;
    font-size: $t-size;
    background-color: $header-color;
    position: sticky;
    top: 0;
}

#logo img{
    height: 60px;
    width: 60px;
}

#navbar-box{
    height: 80px; 
    padding: 0.8rem 0;
}

.anchor{
  color: $icon-color;
}

    
</style>