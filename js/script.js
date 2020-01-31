// get the data
let periodicElement = JSON.parse(elementData);
//render DOM
window.onload = function(){
    // load new Vue
    let app = new Vue({
        el: '#app',
        methods: {
            /**
             This function returns the result of the search query
             @param elements (the elements to be searched)
             @return elements (the filtered elements)
             */
            filterItems: function(elements) {
                let app = this;
                return elements.filter(function (element) {
                    let regex = new RegExp('(' + app.searchQuery + ')', 'i');
                    return element.name.match(regex) + element.type.match(regex) + element.shortcut.match(regex);
                })

            },
            /**
             This function changes the backgroundColor based on the type of element
             @param index (the index of the element
             @param element (to find the element type)
             @return backgroundColor (the associated backgroundColor)
             */
            backgroundChanger: function(index, element){
                let indexOfCurrentElement = this.elements.indexOf(element);
                let backgroundColor = '';
                    for(let i = 0; i <= indexOfCurrentElement; i++){
                        switch (this.elements[i].type) {
                            case 'Nonmetals':
                                backgroundColor = this.nonMetals;
                                break;
                            case 'Alkali metals':
                                backgroundColor = this.alkaliMetals;
                                break;
                            case 'Alkaline Earth':
                                backgroundColor = this.alkalineEarth;
                                break;
                            case 'Basic Metal':
                                backgroundColor = this.basicMetal;
                                break;
                            case 'Halogeen':
                                backgroundColor = this.halogeen;
                                break;
                            case 'Noble Gas':
                                backgroundColor = this.nobleGas;
                                break;
                            case 'Lanthanides':
                                backgroundColor = this.lanthanides;
                                break;
                            case 'Actinides':
                                backgroundColor = this.actinides;
                                break;
                            case 'Semi Metal':
                                backgroundColor = this.semiMetal;
                                break;
                            case 'Transition Metal':
                                backgroundColor = this.transMetal;
                                break;
                            default:
                                break;
                        }
                    }
                return backgroundColor;
            },
            /**
             Function to clear the input value when all is selected, so that all elements will show and not only the elements of the searchQuery
             @return void
             */
            clear:function () {
                this.searchQuery = '';
            }
        },
        //computed functions
        computed: {
            /**
             This function shows only the selected elements
             @return category, the elements with the same category
             */
            filteredCategories: function() {
                let app = this;
                let category = app.selected;

                if(category === 'All') {
                    return app.elements;
                } else {
                    return app.elements.filter(function(element) {
                        return  (category === 'All' || element.type === category);

                    });
                }
            }
        },
        // load the data in the Vue app
        data: {
            searchQuery: '',
            selected:'All',
            isHidden:false,
            elements: periodicElement,
            nonMetals: '#fc7703',
            alkaliMetals:'#f2b91b',
            alkalineEarth: '#FE8982',
            basicMetal:'#CC99FF',
            halogeen:'#04D307',
            nobleGas:'#0AA9ED',
            lanthanides:'#97d94a',
            actinides:'#8EC73C',
            semiMetal:'#6ed108',
            transMetal:'#78C1C4'

        }
    });
};



