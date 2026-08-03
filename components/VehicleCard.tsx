import type { sampleVehicles } from "@/data/site";

type Vehicle = (typeof sampleVehicles)[number];

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <article className="vehicle-card">
      <div className="vehicle-image">
        <img
          src={vehicle.image}
          alt={vehicle.alt}
          loading="lazy"
          decoding="async"
        />
        <span className="demo-label">Demo · ikke lagerbil</span>
      </div>
      <div className="vehicle-heading">
        <div>
          <p>Bruktbil · eksempeldata</p>
          <h3>{vehicle.model}</h3>
        </div>
        <strong>{vehicle.price}</strong>
      </div>
      <dl className="vehicle-specs">
        <div>
          <dt>Årsmodell</dt>
          <dd>{vehicle.modelYear}</dd>
        </div>
        <div>
          <dt>Kilometer</dt>
          <dd>{vehicle.mileage}</dd>
        </div>
        <div>
          <dt>Drivlinje</dt>
          <dd>{vehicle.powertrain}</dd>
        </div>
      </dl>
    </article>
  );
}
