import type { sampleVehicles } from "@/data/site";

type Vehicle = (typeof sampleVehicles)[number];

export function VehicleCard({ vehicle, index }: { vehicle: Vehicle; index: number }) {
  return (
    <article className="vehicle-card">
      <div className="vehicle-image vehicle-photo-placeholder" role="img" aria-label={`Bildeplassholder for en faktisk lagerbil: ${vehicle.model}`}>
        <span className="demo-label">Plassholder · faktisk lagerfoto</span>
        <span className="vehicle-photo-number">0{index}</span>
        <div><strong>{vehicle.model}</strong><span>Fotografer denne bilen hos O.M. Grefstad</span></div>
      </div>
      <div className="vehicle-heading">
        <div><p>Bruktbil · eksempeldata</p><h3>{vehicle.model}</h3></div>
        <strong>{vehicle.price}</strong>
      </div>
      <dl className="vehicle-specs">
        <div><dt>Årsmodell</dt><dd>{vehicle.modelYear}</dd></div>
        <div><dt>Kilometer</dt><dd>{vehicle.mileage}</dd></div>
        <div><dt>Drivlinje</dt><dd>{vehicle.powertrain}</dd></div>
      </dl>
    </article>
  );
}
