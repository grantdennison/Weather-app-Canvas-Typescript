// ###################################################################################
// #############################      Interface (Date)     ###########################
// ###################################################################################

interface Date {
  day: any;
  temperature: string;
  wind: string;
  description?: string;
}

// ###################################################################################
// #####################      Tile Text (Date - Temp -Wind)     ######################
// ###################################################################################

export const tileTextDayCur: Date = {
  day: new Date().toLocaleDateString(`default`, {
    weekday: `long`,
    day: `2-digit`,
    month: `short`,
    year: `numeric`
  }),
  temperature: `0 °C `,
  wind: `0 km/h`,
  description: `Clear`
};
export const tileTextDay1: Date = {
  day: new Date(new Date().getTime() + 86400000).toLocaleDateString(`default`, {
    weekday: `long`,
    day: `2-digit`,
    month: `short`
  }),
  temperature: `0 °C `,
  wind: `0 km/h`
};
export const tileTextDay2: Date = {
  day: new Date(new Date().getTime() + 86400000 * 2).toLocaleDateString(
    `default`,
    {
      weekday: `long`,
      day: `2-digit`,
      month: `short`
    }
  ),
  temperature: `0 °C `,
  wind: `0 km/h`
};
export const tileTextDay3: Date = {
  day: new Date(new Date().getTime() + 86400000 * 3).toLocaleDateString(
    `default`,
    {
      weekday: `long`,
      day: `2-digit`,
      month: `short`
    }
  ),
  temperature: `0 °C `,
  wind: `0 km/h`
};
