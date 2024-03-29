var _newTab;
class Tab {
  constructor(id_el) {
    _newTab = this; //objet new Tab
    this.main = document.querySelector(id_el);
    this.add = document.querySelector('.tab-add');
    this.ul = document.querySelector('.firstNav ul:first-child');
    //this.removeIcon = document.querySelector('.iconefont .remove');
    this.lis = this.main.querySelectorAll('li');
    this.parentSection = this.main.querySelector('.tab-content');
    this.sections = this.main.querySelectorAll('section');
    this.init();
  }
  init() {
    //this ref of Tab
    this.updateNode();
    this.add.onclick = this.addTab;
    for (let i = 0; i < this.lis.length; i++) {
      this.lis[i].index = i;
      this.lis[i].addEventListener('click', this.toggleTab);
      this.removeIcon[i].addEventListener('click', this.removeTab);

    }
  }
  updateNode() {
    this.lis = this.main.querySelectorAll('li');
    this.sections = this.main.querySelectorAll('section');
    this.removeIcon = document.querySelectorAll('.remove');

  }
  toggleTab() {
    //here this represents element Dom that call toggleTab()
    _newTab.clearClassName();
    this.classList.toggle('liActive');
    _newTab.sections[this.index].classList.toggle('content_active');
  }
  clearClassName() {
    //here this ref Tab
    for (let i = 0; i < this.lis.length; i++) {
      this.lis[i].className = '';
      _newTab.sections[i].className = '';
    }
  }
  addTab() {
    //here this ref el Dom

    let li = `<li class="">
	<span>newTest</span>
	<span class="icon-Font remove icon"></span>`;
    let newSection = `<section>NewSection</section>`;
    _newTab.ul.insertAdjacentHTML('beforeend', li);
    _newTab.parentSection.insertAdjacentHTML('beforeend', newSection);
    _newTab.init();
  }
  removeTab(event) {
    //this ref of el
    event.stopPropagation();
    let indexParent = this.parentNode.index;
    console.log('indexParent: ', indexParent);
    _newTab.lis[indexParent].remove();
    _newTab.sections[indexParent].remove();
    _newTab.init();
  }
  editTab() {}
}
new Tab('#tab');
