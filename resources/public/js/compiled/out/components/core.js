// Compiled by ClojureScript 1.10.520 {}
goog.provide('components.core');
goog.require('cljs.core');
components.core.base_currency_select = (function components$core$base_currency_select(currencies_map){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"base-currency-type",new cljs.core.Keyword(null,"class","class",-2030961996),"margin select"], null),(function (){var iter__4523__auto__ = (function components$core$base_currency_select_$_iter__30624(s__30625){
return (new cljs.core.LazySeq(null,(function (){
var s__30625__$1 = s__30625;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__30625__$1);
if(temp__5720__auto__){
var s__30625__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30625__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__30625__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__30627 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__30626 = (0);
while(true){
if((i__30626 < size__4522__auto__)){
var currency = cljs.core._nth.call(null,c__4521__auto__,i__30626);
cljs.core.chunk_append.call(null,b__30627,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.keys.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [currency], null))], null),cljs.core.vals.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [currency], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.keys.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [currency], null))], null)));

var G__30628 = (i__30626 + (1));
i__30626 = G__30628;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30627),components$core$base_currency_select_$_iter__30624.call(null,cljs.core.chunk_rest.call(null,s__30625__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30627),null);
}
} else {
var currency = cljs.core.first.call(null,s__30625__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.keys.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [currency], null))], null),cljs.core.vals.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [currency], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.keys.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [currency], null))], null)),components$core$base_currency_select_$_iter__30624.call(null,cljs.core.rest.call(null,s__30625__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,currencies_map);
})()], null);
});
components.core.converted_currency_select = (function components$core$converted_currency_select(currencies_map){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"converted-currency-type",new cljs.core.Keyword(null,"class","class",-2030961996),"margin select"], null),(function (){var iter__4523__auto__ = (function components$core$converted_currency_select_$_iter__30629(s__30630){
return (new cljs.core.LazySeq(null,(function (){
var s__30630__$1 = s__30630;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__30630__$1);
if(temp__5720__auto__){
var s__30630__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30630__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__30630__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__30632 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__30631 = (0);
while(true){
if((i__30631 < size__4522__auto__)){
var currency = cljs.core._nth.call(null,c__4521__auto__,i__30631);
cljs.core.chunk_append.call(null,b__30632,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.keys.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [currency], null))], null),cljs.core.vals.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [currency], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.keys.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [currency], null))], null)));

var G__30633 = (i__30631 + (1));
i__30631 = G__30633;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30632),components$core$converted_currency_select_$_iter__30629.call(null,cljs.core.chunk_rest.call(null,s__30630__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30632),null);
}
} else {
var currency = cljs.core.first.call(null,s__30630__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.keys.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [currency], null))], null),cljs.core.vals.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [currency], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.keys.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [currency], null))], null)),components$core$converted_currency_select_$_iter__30629.call(null,cljs.core.rest.call(null,s__30630__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,currencies_map);
})()], null);
});
components.core.base_amount_input = (function components$core$base_amount_input(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Amount to convert",new cljs.core.Keyword(null,"name","name",1843675177),"base-amount",new cljs.core.Keyword(null,"id","id",-1388402092),"base-amount",new cljs.core.Keyword(null,"class","class",-2030961996),"margin"], null)], null);
});
components.core.render_result_conditionals = (function components$core$render_result_conditionals(display_converted_amount,converted_amount,desired_currency_type){
if(cljs.core._EQ_.call(null,display_converted_amount,"loading")){
new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"lds-ring"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)], null);
} else {
}

if(cljs.core._EQ_.call(null,display_converted_amount,true)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),((((100) * converted_amount) | (0)) / (100))," ",desired_currency_type], null);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map?rel=1581833388214