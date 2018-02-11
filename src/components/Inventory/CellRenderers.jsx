import React    from 'react';
import './InventoryPage.sass';


export const PriceCell = row => (
    <span className="PriceCell">
        {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(row.value)}
    </span>
);


export const DateCell = row => <span className="DateCell">{new Date(Number(row.value)).toLocaleDateString()}</span>;


export const QualityCell = row => (
    <div className="QualityCell">
        <div className="QualityCell__bar" style={{
            width: `${row.value}%`,
            backgroundColor: row.value > 66 ? '#85cc00'
                : row.value > 33 ? '#ffbf00'
                    : '#ff2e00'
        }} />
        <div className="QualityCell__percents">
            {Math.round(row.value * 10) / 10}<small>%</small>
        </div>
    </div>
);


export const CheckboxCell = row => (
    <div className="CheckboxCell">
        <input type="checkbox" data-id={row.value} checked={row.isSelected}/>
    </div>
);
