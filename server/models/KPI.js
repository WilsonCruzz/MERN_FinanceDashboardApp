import mongoose from "mongoose";
import {loadType} from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const daySchema = new Schema(
    {
        date:String,
        revenue : {
            type:mongoose.Types.Currency,
            currency:"CAD",
            get:(v) => v/100, // get real value
        },
        expenses : {
            type:mongoose.Types.Currency,
            currency:"CAD",
            get:(v) => v/100, // get real value
        },
        },
        { toJSON:{getters:true}}
);

const monthSchema =new Schema({
    month:String,
    revenue : {
        type:mongoose.Types.Currency,
        currency:"CAD",
        get:(v) => v/100, // get real value
    },
    expenses : {
        type:mongoose.Types.Currency,
        currency:"CAD",
        get:(v) => v/100, // get real value
    },
    operationalExpenses : {
        type:mongoose.Types.Currency,
        currency:"CAD",
        get:(v) => v/100, // get real value
    },
    nonOperationalExpenses : {
        type:mongoose.Types.Currency,
        currency:"CAD",
        get:(v) => v/100, // get real value
    },
    },
    { toJSON:{getters:true}}
);

const KpiSchema = new Schema(
    {
        totalProfit: {
            type: mongoose.Types.Currency,
            currency:"CAD",
            get:(v) => v/100, // get real value
        },
        totalRevenue: {
            type: mongoose.Types.Currency,
            currency:"CAD",
            get:(v) => v/100, // get real value
        },
        totalExpense: {
        type: mongoose.Types.Currency,
        currency:"CAD",
        get:(v) => v/100, // get real value
        },
        expenseByCategory: {
            type: Map,
            of:{
                type:mongoose.Types.Currency,
                currency:"CAD",
                get:(v) => v/100, // get real value
            }
        },
        monthlyData:[monthSchema],
        dailyData:[daySchema]

    },
    { timestamps:true, toJSON:{getters:true}}
);

const KPI = mongoose.model("KPI", KpiSchema);

export default KPI;