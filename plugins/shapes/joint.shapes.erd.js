import { Element } from '../../src/joint.dia.element.js';
import { Link } from '../../src/joint.dia.link.js';

export const Entity = Element.define('erd.Entity', {
    size: { width: 150, height: 60 },
    attrs: {
        '.outer': {
            fill: '#2ECC71', stroke: '#27AE60', 'stroke-width': 2,
            points: '100,0 100,60 0,60 0,0'
        },
        '.inner': {
            fill: '#2ECC71', stroke: '#27AE60', 'stroke-width': 2,
            points: '95,5 95,55 5,55 5,5',
            display: 'none'
        },
        text: {
            text: 'Entity',
            'font-family': 'Arial', 'font-size': 14,
            'ref-x': .5, 'ref-y': .5,
            'y-alignment': 'middle', 'text-anchor': 'middle'
        }
    }
}, {
    markup: '<g class="rotatable"><g class="scalable"><polygon class="outer"/><polygon class="inner"/></g><text/></g>',
});

export const WeakEntity = Entity.define('erd.WeakEntity', {
    attrs: {
        '.inner': { display: 'auto' },
        text: { text: 'Weak Entity' }
    }
});

export const Relationship = Element.define('erd.Relationship', {
    size: { width: 80, height: 80 },
    attrs: {
        '.outer': {
            fill: '#3498DB', stroke: '#2980B9', 'stroke-width': 2,
            points: '40,0 80,40 40,80 0,40'
        },
        '.inner': {
            fill: '#3498DB', stroke: '#2980B9', 'stroke-width': 2,
            points: '40,5 75,40 40,75 5,40',
            display: 'none'
        },
        text: {
            text: 'Relationship',
            'font-family': 'Arial', 'font-size': 12,
            'ref-x': .5, 'ref-y': .5,
            'y-alignment': 'middle', 'text-anchor': 'middle'
        }
    }
}, {
    markup: '<g class="rotatable"><g class="scalable"><polygon class="outer"/><polygon class="inner"/></g><text/></g>',
});

export const IdentifyingRelationship = Relationship.define('erd.IdentifyingRelationship', {
    attrs: {
        '.inner': { display: 'auto' },
        text: { text: 'Identifying' }
    }
});

export const Attribute = Element.define('erd.Attribute', {
    size: { width: 100, height: 50 },
    attrs: {
        'ellipse': {
            transform: 'translate(50, 25)'
        },
        '.outer': {
            stroke: '#D35400', 'stroke-width': 2,
            cx: 0, cy: 0, rx: 50, ry: 25,
            fill: '#E67E22'
        },
        '.inner': {
            stroke: '#D35400', 'stroke-width': 2,
            cx: 0, cy: 0, rx: 45, ry: 20,
            fill: '#E67E22', display: 'none'
        },
        text: {
            'font-family': 'Arial', 'font-size': 14,
            'ref-x': .5, 'ref-y': .5,
            'y-alignment': 'middle', 'text-anchor': 'middle'
        }
    }
}, {
    markup: '<g class="rotatable"><g class="scalable"><ellipse class="outer"/><ellipse class="inner"/></g><text/></g>',
});

export const Multivalued = Attribute.define('erd.Multivalued', {
    attrs: {
        '.inner': { display: 'block' },
        text: { text: 'multivalued' }
    }
});

export const Derived = Attribute.define('erd.Derived', {
    attrs: {
        '.outer': { 'stroke-dasharray': '3,5' },
        text: { text: 'derived' }
    }
});

export const Key = Attribute.define('erd.Key', {
    attrs: {
        ellipse: { 'stroke-width': 4 },
        text: { text: 'key', 'font-weight': '800', 'text-decoration': 'underline' }
    }
});

export const Normal = Attribute.define('erd.Normal', {
    attrs: { text: { text: 'Normal' }}
});

export const ISA = Element.define('erd.ISA', {
    type: 'erd.ISA',
    size: { width: 100, height: 50 },
    attrs: {
        polygon: {
            points: '0,0 50,50 100,0',
            fill: '#F1C40F', stroke: '#F39C12', 'stroke-width': 2
        },
        text: {
            text: 'ISA', 'font-size': 18,
            'ref-x': .5, 'ref-y': .3,
            'y-alignment': 'middle', 'text-anchor': 'middle'
        }
    }
}, {
    markup: '<g class="rotatable"><g class="scalable"><polygon/></g><text/></g>',
});

export const Line = Link.define('erd.Line', {}, {
    cardinality: function(value) {
        this.set('labels', [{ position: -20, attrs: { text: { dy: -8, text: value }}}]);
    }
});
