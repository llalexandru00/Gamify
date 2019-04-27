import React, { Component } from 'react';
import './Map.css';
import pink_chance from '../../resources/pink_chance.png';
import blue_chance from '../../resources/blue_chance.png';
import orange_chance from '../../resources/orange_chance.png';
import railroad from '../../resources/railroad.png';
import railroad2 from '../../resources/railroad2.png';
import chest from '../../resources/chest.png';
import chest2 from '../../resources/chest2.png';
import water from '../../resources/water.png';
import electric from '../../resources/electric.png';
import luxury from '../../resources/luxury.png';
import income from '../../resources/income.png';
import parking from '../../resources/parking.png';


var chance={};
chance["blue"] = blue_chance;
chance["pink"] = pink_chance;
chance["orange"] = orange_chance;

class VerticalMapCard extends Component {
    render() {
        if (this.props.model["type"] === "Property")
        {
            return (
                <div className="property-map-card" style={this.props.style} >
                    <div className="header-property-map-card" style={{backgroundColor: this.props.model["color"]}}/>
                    <div className="text-property-map-card">{this.props.model["name"]}</div>
                    <div className="price-propery-map-card">M{this.props.model["price"]}</div>
                </div>
            );
        }
        if (this.props.model['type'] === "Chance")
        {
            return (
                <div className="chance-map-card" style={this.props.style} >
                    <div className="text-chance-map-card">{this.props.model["name"]}</div>
                    <div className="image-chance-map-card" style={{backgroundImage: `url(${chance[this.props.model["color"]]})`}}/>
                </div>
            );
        }
        if (this.props.model['type'] === "Railroad")
        {
            return (
                <div className="railroad-map-card" style={this.props.style} >
                    <div className="text-railroad-map-card">{this.props.model["name"]}</div>
                    <div className="image-railroad-map-card" style={{backgroundImage: `url(${railroad}`}}/>
                    <div className="price-railroad-map-card">M{this.props.model["price"]}</div>
                </div>
            );
        }
        if (this.props.model['type'] === "CommunityChest")
        {
            return (
                <div className="chest-map-card" style={this.props.style} >
                    <div className="text-chest-map-card">{this.props.model["name"]}</div>
                    <div className="image-chest-map-card" style={{backgroundImage: `url(${chest})`}}/>
                </div>
            );
        }
        if (this.props.model['type'] === "WaterUtility")
        {
            return (
                <div className="water-map-card" style={this.props.style} >
                    <div className="text-water-map-card">{this.props.model["name"]}</div>
                    <div className="image-water-map-card" style={{backgroundImage: `url(${water})`}}/>
                    <div className="price-water-map-card">M{this.props.model["price"]}</div>
                </div>
            );
        }
        if (this.props.model['type'] === "IncomeTax")
        {
            return (
                <div className="income-map-card" style={this.props.style} >
                    <div className="text-income-map-card">{this.props.model["name"]}</div>
                    <div className="image-income-map-card" style={{backgroundImage: `url(${income})`}}/>
                    <div className="price-income-map-card">PAY&ensp;M{this.props.model["pay"]}</div>
                </div>
            );
        }
        else
            return(<div/>);
    }
}

class HorizontalCard extends Component {
    render() {
        if (this.props.model["type"] === "Property")
        {
            return (
                <div className="horizontal-property-map-card" style={this.props.style} >
                    <div className="horizontal-header-property-map-card" style={{backgroundColor: this.props.model["color"]}}/>
                    <div className="horizontal-text-property-map-card">{this.props.model["name"]}</div>
                    <div className="horizontal-price-propery-map-card">M{this.props.model["price"]}</div>
                </div>
            );
        }
        if (this.props.model['type'] === "Chance")
        {
            return (
                <div className="horizontal-chance-map-card" style={this.props.style} >
                    <div className="horizontal-text-chance-map-card">{this.props.model["name"]}</div>
                    <div className="horizontal-image-chance-map-card" style={{backgroundImage: `url(${chance[this.props.model["color"]]})`}}/>
                </div>
            );
        }
        if (this.props.model['type'] === "Railroad")
        {
            return (
                <div className="horizontal-railroad-map-card" style={this.props.style} >
                    <div className="horizontal-text-railroad-map-card">{this.props.model["name"]}</div>
                    <div className="horizontal-image-railroad-map-card" style={{backgroundImage: `url(${railroad2}`}}/>
                    <div className="horizontal-price-railroad-map-card">M{this.props.model["price"]}</div>
                </div>
            );
        }
        if (this.props.model['type'] === "CommunityChest")
        {
            return (
                <div className="horizontal-chest-map-card" style={this.props.style} >
                    <div className="horizontal-text-chest-map-card">{this.props.model["name"]}</div>
                    <div className="horizontal-image-chest-map-card" style={{backgroundImage: `url(${chest2})`}}/>
                </div>
            );
        }
        if (this.props.model['type'] === "ElectricUtility")
        {
            return (
                <div className="horizontal-electric-map-card" style={this.props.style} >
                    <div className="horizontal-text-electric-map-card">{this.props.model["name"]}</div>
                    <div className="horizontal-image-electric-map-card" style={{backgroundImage: `url(${electric})`}}/>
                    <div className="horizontal-price-electric-map-card">M{this.props.model["price"]}</div>
                </div>
            );
        }
        if (this.props.model['type'] === "LuxuryTax")
        {
            return (
                <div className="horizontal-luxury-map-card" style={this.props.style} >
                    <div className="horizontal-text-luxury-map-card">{this.props.model["name"]}</div>
                    <div className="horizontal-image-luxury-map-card" style={{backgroundImage: `url(${luxury})`}}/>
                    <div className="horizontal-price-luxury-map-card">PAY&ensp;M{this.props.model["pay"]}</div>
                </div>
            );
        }
        else
            return(<div/>);
    }
}

class MapCenter extends Component {
    render()
    {
        return (
            <div className="map-center"/>
        );
    }
}

class NorthWestMapCard extends Component {
    render()
    {
        return(
            <div className="northwest-map-card" style={this.props.style} >
                <div className="text1-northwest-map-card">{this.props.model["text1"]}</div>
                <div className="image-northwest-map-card" style={{backgroundImage: `url(${parking})`}}/>
                <div className="text2-northwest-map-card">{this.props.model["text2"]}</div>
            </div>
        );
    }
}


class Map extends Component {

    createMap = (model) => {
        let map = [];
        let nr=0;
        let size = model['map_cards'].length;
        for (let i=0; i<11; i++)
            for (let j=0; j<11; j++)
            {
                if (i===0)
                {
                    if (j===0)
                        map.push(<div className="map-card map-card-turned"><NorthWestMapCard model={model['map_cards'][nr]}/></div>);
                    else if (j==10)
                        map.push(<div className="map-card map-card-turned"/>);
                    else
                        map.push(<div className="map-card map-card-turned"><VerticalMapCard model={model['map_cards'][nr]}/></div>);
                    nr=Math.min(size-1, nr+1);
                }
                else if (i===10)
                {
                    if (j===0 || j===10)
                        map.push(<div className="map-card"/>);
                    else
                        map.push(<div className="map-card"><VerticalMapCard  model={model['map_cards'][nr]}/></div>);
                    nr=Math.min(size-1, nr+1);
                }
                else if (j===0)
                {
                    map.push(<div className="map-card horizontal-map-card"><HorizontalCard model={model['map_cards'][nr]}/></div>);
                    nr=Math.min(size-1, nr+1);
                }
                else if (j===10)
                {
                    map.push(<div className="map-card horizontal-map-card map-card-turned"><HorizontalCard model={model['map_cards'][nr]}/></div>);
                    nr=Math.min(size-1, nr+1);
                }
                else if (i===1 && j===1)
                    map.push(<MapCenter/>);
            }
        return map;
    };

    render() {
        return (
            <div className="grid-container">
                {this.createMap(this.props.model)}
            </div>
        );
    }
}

export default Map;