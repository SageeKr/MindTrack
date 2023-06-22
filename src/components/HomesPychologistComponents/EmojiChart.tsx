import React from 'react';
import { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { VictorySharedEvents, VictoryBar, VictoryLabel, VictoryPie } from 'victory';

const ChartComponent: React.FC = () => {
  return (
    <IonCard>
              <IonCardTitle>Patient feelings chart</IonCardTitle>
      <IonCardContent>
        <svg viewBox="0 0 450 350">
          <VictorySharedEvents
            events={[
              {
                childName: ["pie", "bar"],
                target: "data",
                eventHandlers: {
                  onMouseOver: () => {
                    return [
                      {
                        childName: ["pie", "bar"],
                        mutation: (props) => {
                          return {
                            style: Object.assign({}, props.style, {
                              fill: "yellow",
                            }),
                          };
                        },
                      },
                    ];
                  },
                  onMouseOut: () => {
                    return [
                      {
                        childName: ["pie", "bar"],
                        mutation: () => {
                          return null;
                        },
                      },
                    ];
                  },
                },
              },
            ]}
          >
            <g transform={"translate(150, 50)"}>
              <VictoryBar
                name="bar"
                width={300}
                standalone={false}
                style={{
                  data: { width: 20 },
                  labels: { fontSize: 18, fill: "black" }, // Adjust the font size and color for the percentages
                }}
                data={[
                  { x: "😞", y: 2 },
                  { x: "😐", y: 3 },
                  { x: "🙂", y: 5 },
                  { x: "😄", y: 4 },
                ]}
                labels={({ datum }) => `${((datum.y / 14) * 100).toFixed(2)}%`} // Display the percentages as labels
                labelComponent={<VictoryLabel y={290} />} // Adjust the dy value to position the labels above the bars
              />
            </g>
            <g transform={"translate(0, -75)"}>
              <VictoryPie
                name="pie"
                width={250}
                standalone={false}
                style={{ labels: { fontSize: 30, padding: 10 } }} // Adjust the font size for the pie chart labels
                data={[
                  { x: "😞", y: 1 },
                  { x: "😐", y: 4 },
                  { x: "🙂", y: 5 },
                  { x: "😄", y: 7 },
                ]}
              />
            </g>
          </VictorySharedEvents>
        </svg>
      </IonCardContent>
    </IonCard>
  );
};

export default ChartComponent;
