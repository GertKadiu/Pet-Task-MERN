import React from "react";
import Input from "../../components/Input/input";
import UploadStatus from "../../components/UploadImage/UploadStatus";
import UploadPic from "../../components/UploadImage/uploadPic";
import Button from "../../Ui/Button/Button";
import { ButtonTypes } from "../../Ui/Button/ButtonTypes";
import style from "./Style.module.css";
import { Link } from "react-router-dom";

export function DogsForm({
  formData,
  onSubmit,
  handleChange,
  image,
  fileUploadError,
  filePerc,
  setFile,
}) {
  return (
    <div>
      <div>
        <form>
          <div
           className={style.contanier}
          >
            <div
              className={style.input}
            >
              <Input
                variant="outlined"
                id="DogName"
                label="Name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                variant="outlined"
                label="Breed_group"
                type="text"
                name="breed_group"
                value={formData.breed_group}
                onChange={handleChange}
              />
              <div
                className={style.inlineInput}
              >
                <Input
                  variant="outlined"
                  label="Life span"
                  name="lifespan"
                  type="text"
                  value={formData.lifespan}
                  onChange={handleChange}
                />
                <Input
                  variant="outlined"
                  label="Size"
                  type="text"
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                />
              </div>

              <Input
                variant="outlined"
                label="Description"
                name="description"
                type="text"
                multiline
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div
             className={style.input}
            >
              <Input
                variant="outlined"
                label="Origin"
                type="text"
                name="origin"
                value={formData.origin}
                onChange={handleChange}
              />

              <Input
                variant="outlined"
                label="colors"
                type="text"
                name="colors"
                value={formData.colors}
                onChange={handleChange}
              />
              <Input
                variant="outlined"
                label="Temperament"
                type="text"
                name="temperament"
                value={formData.temperament}
                onChange={handleChange}
              />
            </div>
          </div>
          {image ? (
            <div className={style.place}>
              <img src={image} alt="Selected" className={style.img} />
            </div>
          ) : null}
          <UploadPic onChange={(e) => setFile(e.target.files[0])} />
          <UploadStatus fileUploadError={fileUploadError} filePerc={filePerc} />
          <div className={style.btnContanier}>
          <Link to={"/animals"}>
          <Button  type={ButtonTypes.CANCEL} btnText="Cancel" />
        </Link>
            <Button
              type={ButtonTypes.CREATE}
              onClick={onSubmit}
              btnText="Save"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export function CatsForm({
  formData,
  onSubmit,
  handleChange,
  image,
  fileUploadError,
  filePerc,
  setFile,
}) {
  return (
    <div>
      <form>
        <div
          className={style.contanier}
        >
          <div
           className={style.input}
          >
            <Input
              variant="outlined"
              label="Name"
              id="Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <Input
              variant="outlined"
              label="Description"
              name="description"
              type="text"
              multiline
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div
           className={style.input}
          >
            <Input
              variant="outlined"
              label="Origin"
              name="origin"
              type="text"
              value={formData.origin}
              onChange={handleChange}
            />

            <Input
              variant="outlined"
              label="colors"
              type="text"
              name="colors"
              value={formData.colors}
              onChange={handleChange}
            />
            <Input
              variant="outlined"
              label="Temperament"
              name="temperament"
              type="text"
              value={formData.temperament}
              onChange={handleChange}
            />
          </div>
        </div>
        {image ? (
          <div className={style.place}>
            <img src={image} alt="Selected" className={style.img} />
          </div>
        ) : null}
        <UploadPic onChange={(e) => setFile(e.target.files[0])} />
        <UploadStatus fileUploadError={fileUploadError} filePerc={filePerc} />
        <div className={style.btnContanier}>
        <Link to={"/animals"}>
          <Button type={ButtonTypes.CANCEL} btnText="Cancel" />
        </Link>
          <Button type={ButtonTypes.CREATE} onClick={onSubmit} btnText="Save" />
        </div>
      </form>
    </div>
  );
}

export function BirdsForm({
  formData,
  onSubmit,
  handleChange,
  image,
  fileUploadError,
  filePerc,
  setFile,
}) {
  return (
    <form>
      <div
        className={style.contanier}
      >
        <div
          className={style.input}
        >
          <Input
            variant="outlined"
            label="Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            variant="outlined"
            label="Species"
            name="species"
            type="text"
            value={formData.species}
            onChange={handleChange}
          />

          <div
           className={style.inlineInput}
          >
            <Input
              variant="outlined"
              label="Family"
              name="family"
              type="text"
              value={formData.family}
              onChange={handleChange}
            />
            <Input
              variant="outlined"
              label="Habitat"
              name="habitat"
              type="text"
              value={formData.habitat}
              onChange={handleChange}
            />
          </div>
          <Input
            variant="outlined"
            label="Description"
            name="description"
            type="text"
            multiline
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div
         className={style.input}
        >
          <Input
            variant="outlined"
            label="Place of Found"
            name="place_of_found"
            type="text"
            value={formData.place_of_found}
            onChange={handleChange}
          />
          <Input
            variant="outlined"
            label="Diet"
            name="diet"
            type="text"
            value={formData.diet}
            onChange={handleChange}
          />
          <Input
            variant="outlined"
            label="Weight (kg)"
            name="weight_kg"
            type="number"
            value={formData.weight_kg}
            onChange={handleChange}
          />
          <Input
            variant="outlined"
            label="Height (cm)"
            name="height_cm"
            type="number"
            value={formData.height_cm}
            onChange={handleChange}
          />
        </div>
      </div>
      {image ? (
        <div className={style.place}>
          <img src={image} alt="Selected" className={style.img} />
        </div>
      ) : null}
      <UploadPic onChange={(e) => setFile(e.target.files[0])} />
      <UploadStatus fileUploadError={fileUploadError} filePerc={filePerc} />
      <div className={style.btnContanier}>
        <Link to={"/animals"}>
          <Button type={ButtonTypes.CANCEL} btnText="Cancel" />
        </Link>
        <Button type={ButtonTypes.CREATE} onClick={onSubmit} btnText="Save" />
      </div>
    </form>
  );
}
