<template>
    <div class="dropdown">
        <div class="dropdown-mask fixed inset-0 z-40" v-if="open" @click="toggle"></div>
        <div class="relative">
            <button @click="toggle" type="button" class="dropdown-trigger block w-full focus:outline-none">
                <slot name="trigger" :toggle="toggle" :open="open"></slot>
            </button>
            <div v-if="open" class="absolute z-50 mt-2 rounded-lg border shadow-md bg-white overflow-hidden" :class="directionClasses">
                <div class="py-2 w-64 dropdown-content">
                    <slot name="content" :toggle="toggle" :open="open"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        direction: {
            default: 'center'
        }
    },
    data() {
        return {
            open: false
        }
    },
    methods: {
        toggle() {
            this.open = !this.open;

            this.$root.$el.classList.toggle('dropdown-open');
        }
    },
    computed: {
        directionClasses() {
            if(this.direction == 'center') {
                return '';
            }

            if(this.direction == 'left') {
                return 'right-0';
            }

            if(this.direction == 'right') {
                return 'left-0';
            }
        }
    }
}
</script>