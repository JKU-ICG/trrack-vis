import {style} from "typestyle";
import {EventConfig} from "../Utils/EventConfig";
import React from "react";

const legendBorderDivStyle = style({
  borderRadius:"4px",
  border: "4px solid",
  display:"inline-block",
  color:"#ffffff",
  fontFamily:"Lato,Helvetica Neue,Arial,Helvetica,sans-serif",
  fontSize:"14px",
  padding:"5px 5px",
  margin: "10px 10px 10px 0px"
});

const eventIconStyle = style({
  verticalAlign: "middle"
});

const eventDescriptionStyle = style({
  display: "inline",
  color: "black"
});

const eventDivStyle = style({
  marginTop: "5px",
  marginBottom: "5px"
});


interface LegendProps {
  filters?: boolean
  eventConfig?: EventConfig<string>,
  iconHeight: number,
  iconWidth: number,
  typeFilter: Set<string>,
  setTypeFilter: (typeFilter: Set<string>) => any
}


export function Legend({
    filters,
    eventConfig,
    iconHeight,
    iconWidth,
    typeFilter,
    setTypeFilter
  }: LegendProps) {
  let eventTypeDescriptions = new Array<Object>();
  let transform = `translate(${iconHeight/2}, ${iconWidth/2-2.5})`;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    // update typeFilter state
    e.target.checked ? typeFilter.add(key) : typeFilter.delete(key)
    setTypeFilter(new Set<string>(typeFilter));
  }

  if(eventConfig){
    for (let key in eventConfig) {
      let event = eventConfig[key];
      let eventDiv = <div className={eventDivStyle} key={key}>
        {filters &&
        <input type="checkbox" id={key+" checkbox"} name={key} value={key} checked={typeFilter.has(key)} onChange={e => onChange(e, key)}></input>
        }
        <svg height={iconHeight} width={iconWidth} className={eventIconStyle} >
          <g transform={transform}>
            {event.backboneGlyph}
          </g>
        </svg>
        <p className={eventDescriptionStyle}>{event.description ? event.description : "Event description missing"}</p>
      </div>
      eventTypeDescriptions.push(eventDiv);
    }
  }
  return <div id="Legend" className={legendBorderDivStyle}>
    {eventTypeDescriptions}
  </div>
}
