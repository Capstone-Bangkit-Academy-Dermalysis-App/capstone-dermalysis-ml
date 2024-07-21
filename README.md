# CAPSTONE PROJECT DOCUMENTATION
<p align="center">
  <img src="https://github.com/Capstone-Bangkit-Academy-Dermalysis-App/capstone-dermalysis-ml/blob/master/Documentation/About%20Dermalysis.png" alt="Deskripsi Gambar" style="width:100%;">
</p>

# ABOUT DERMALYSIS
Dermalysis is an innovative mobile app that uses image classification technology to detect skin diseases.  Dermalysis also offers customised treatment recommendations, helping users recognise and treat their skin problems with ease.

# DATASET
The datasets we used came from Kaggle and DermNet. We also obtained some images from Google. After cleaning the data, we used the Roboflow platform to preprocess the images and split the data into train and test data. There are 6 types of diseases in this dataset, namely, nail fungus, chickenpox, acne, ringworm and athlete's foot.
# MODEL ARCHITECTUR
InceptionV3, or Inception Version 3, is one of the most popular convolutional neural network architectures developed by Google. InceptionV3 is best known for its highly efficient ability to detect and classify images through the use of a very deep network and the use of Inception blocks. We chose InceptionV3 for the cataract classification task for various technical and practical reasons that make it excel in high-precision medical image analysis.

# TRAINING
We train InceptionV3 models using image datasets that have been labelled in the training set. We utilise reputable machine learning frameworks or libraries such as TensorFlow or Keras that provide ready-to-use InceptionV3 implementations. We adjust the hyperparameters and training configuration based on experiments and evaluation of the model performance to obtain optimal results. In addition, we also tried to train the model using MobileNet and DenseNet for other experiments.

## Fine-tune hyperparameters and Training configurations
| *Type*                       | *Value*                                                                                                                                   |
|--------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| *Learning Rate*              | 0.0001                                                                                                                                    |
| *Optimizer*                  | Adam                                                                                                                                      |
| *Batch Size*                 | 32                                                                                                                                       |
| *Number of Training Epochs*  | 25                                                                                                                                        |
| *Input Shape*                | (416, 416, 3)                                                                                                                             |
| *Data Augmentation Parameters* | rescale=1./255, <br> rotation_range=20,<br> width_shift_range=0.2,<br> height_shift_range=0.2,<br> shear_range=0.2,<br> zoom_range=0.2,<br> fill_mode='nearest',<br> brightness_range=[0.8, 1.2],<br> horizontal_flip=True |
| *Regularization Techniques*  | layers.Flatten()(last_output),<br> layers.Dense(1024, activation='relu')(x),<br> layers.Dropout(0.2)(x),<br> layers.Dense(5, activation='softmax')(x) |
